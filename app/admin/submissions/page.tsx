"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Download, Trash2 } from "lucide-react"
import { getArticles, deleteArticle, updateArticleStatus, downloadFile, type Article } from "@/lib/local-storage"

export default function SubmissionsPage() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    setArticles(getArticles())
  }, [])

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this submission?")) {
      deleteArticle(id)
      setArticles(getArticles())
    }
  }

  const handleStatusChange = (id: string, status: Article["status"]) => {
    updateArticleStatus(id, status)
    setArticles(getArticles())
  }

  const handleDownload = (article: Article) => {
    downloadFile(article.fileData, article.fileName)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Article Submissions</h1>
          <p className="text-muted-foreground">Review and manage submitted articles</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/admin">Back to Dashboard</Link>
        </Button>
      </div>

      {articles.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No submissions yet</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {articles.map((article) => (
            <Card key={article.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{article.titleEn}</CardTitle>
                    <CardDescription className="mt-2">
                      <div className="space-y-1">
                        <p>
                          <span className="font-semibold">Author:</span> {article.authorNameEn}
                        </p>
                        <p>
                          <span className="font-semibold">Email:</span> {article.email}
                        </p>
                        <p>
                          <span className="font-semibold">Phone:</span> {article.phone}
                        </p>
                        <p>
                          <span className="font-semibold">Workplace:</span> {article.workplaceEn}
                        </p>
                        <p>
                          <span className="font-semibold">Position:</span> {article.positionEn}
                        </p>
                        <p>
                          <span className="font-semibold">Field:</span>{" "}
                          <Badge variant="outline">{article.fieldOfScience}</Badge>
                        </p>
                        <p>
                          <span className="font-semibold">Submitted:</span>{" "}
                          {new Date(article.submittedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </CardDescription>
                  </div>
                  <Badge
                    variant={
                      article.status === "approved"
                        ? "default"
                        : article.status === "rejected"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {article.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold mb-1">Keywords (English):</p>
                    <p className="text-sm text-muted-foreground">{article.keywordsEn}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleDownload(article)}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Article
                    </Button>

                    {article.status === "pending" && (
                      <>
                        <Button size="sm" variant="default" onClick={() => handleStatusChange(article.id, "approved")}>
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleStatusChange(article.id, "rejected")}
                        >
                          Reject
                        </Button>
                      </>
                    )}

                    <Button size="sm" variant="ghost" onClick={() => handleDelete(article.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

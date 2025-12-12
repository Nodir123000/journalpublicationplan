"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Trash2 } from "lucide-react"
import {
  saveJournalIssue,
  getJournalIssues,
  deleteJournalIssue,
  fileToBase64,
  type JournalIssue,
} from "@/lib/local-storage"
import Link from "next/link"

export default function IssuesManagementPage() {
  const [issues, setIssues] = useState<JournalIssue[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [coverPreview, setCoverPreview] = useState<string | null>(null)

  useEffect(() => {
    setIssues(getJournalIssues())
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCoverFile(file)
      // Create preview URL
      const previewUrl = URL.createObjectURL(file)
      setCoverPreview(previewUrl)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    let coverImage = "/placeholder.svg"
    if (coverFile) {
      coverImage = await fileToBase64(coverFile)
    }

    const issue: JournalIssue = {
      id: `issue-${Date.now()}`,
      volume: formData.get("volume") as string,
      issue: formData.get("issue") as string,
      month: {
        uz: formData.get("month_uz") as string,
        ru: formData.get("month_ru") as string,
        en: formData.get("month_en") as string,
      },
      year: formData.get("year") as string,
      articles: Number.parseInt(formData.get("articles") as string) || 0,
      coverImage,
      createdAt: new Date().toISOString(),
    }

    saveJournalIssue(issue)
    setIssues(getJournalIssues())
    setIsDialogOpen(false)
    setCoverFile(null)
    setCoverPreview(null)
    e.currentTarget.reset()
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this issue?")) {
      deleteJournalIssue(id)
      setIssues(getJournalIssues())
    }
  }

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open)
    if (!open) {
      if (coverPreview) URL.revokeObjectURL(coverPreview)
      setCoverPreview(null)
      setCoverFile(null)
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Manage Journal Issues</h1>
          <p className="text-muted-foreground">Add and manage journal issues with cover images</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/admin">Back to Dashboard</Link>
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Issue
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Journal Issue</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="volume">Volume</Label>
                    <Input id="volume" name="volume" required />
                  </div>
                  <div>
                    <Label htmlFor="issue">Issue Number</Label>
                    <Input id="issue" name="issue" required />
                  </div>
                  <div>
                    <Label htmlFor="year">Year</Label>
                    <Input id="year" name="year" type="number" required />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="month_uz">Month (Uzbek)</Label>
                    <Input id="month_uz" name="month_uz" required placeholder="Dekabr" />
                  </div>
                  <div>
                    <Label htmlFor="month_ru">Month (Russian)</Label>
                    <Input id="month_ru" name="month_ru" required placeholder="Декабрь" />
                  </div>
                  <div>
                    <Label htmlFor="month_en">Month (English)</Label>
                    <Input id="month_en" name="month_en" required placeholder="December" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="articles">Number of Articles</Label>
                  <Input id="articles" name="articles" type="number" defaultValue="0" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cover">Cover Image</Label>
                  <Input id="cover" type="file" accept="image/*" onChange={handleFileChange} />
                  <p className="text-sm text-muted-foreground">Upload a cover image for the journal issue</p>

                  {coverPreview && (
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Preview:</p>
                      <img
                        src={coverPreview || "/placeholder.svg"}
                        alt="Cover preview"
                        className="w-full max-w-xs rounded-lg border"
                      />
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Add Issue
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {issues.map((issue) => (
          <Card key={issue.id}>
            <div className="relative h-48 bg-gradient-to-br from-[#0f1629] via-[#1a2844] to-[#0f1629] overflow-hidden">
              <img
                src={issue.coverImage || "/placeholder.svg"}
                alt={`${issue.month.en} ${issue.year}`}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>
                Vol. {issue.volume}, No. {issue.issue}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {issue.month.en} {issue.year}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{issue.articles} articles</p>
              <div className="flex gap-2">
                <Button size="sm" variant="destructive" onClick={() => handleDelete(issue.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

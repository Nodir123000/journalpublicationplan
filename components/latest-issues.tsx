"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { getJournalIssues } from "@/lib/local-storage"

const mockIssues = [
  {
    volume: "2",
    issue: "12",
    month: { uz: "Dekabr", ru: "Декабрь", en: "December" },
    year: "2024",
    articles: 24,
    coverImage: "/academic-journal-cover-december.jpg",
  },
  {
    volume: "2",
    issue: "11",
    month: { uz: "Noyabr", ru: "Ноябрь", en: "November" },
    year: "2024",
    articles: 28,
    coverImage: "/academic-journal-cover-november.jpg",
  },
  {
    volume: "2",
    issue: "10",
    month: { uz: "Oktabr", ru: "Октябрь", en: "October" },
    year: "2024",
    articles: 22,
    coverImage: "/academic-journal-cover-october.jpg",
  },
]

export function LatestIssues() {
  const { language } = useLanguage()
  const [issues, setIssues] = useState<any[]>(mockIssues)

  useEffect(() => {
    const storedIssues = getJournalIssues()
    if (storedIssues.length > 0) {
      setIssues(storedIssues.slice(-3).reverse()) // Show last 3 issues
    }
  }, [])

  const translate = (text: { uz: string; ru: string; en: string }) => text[language]

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {translate({
                uz: "So'nggi sonlar",
                ru: "Последние выпуски",
                en: "Latest Issues",
              })}
            </h2>
            <Button asChild variant="outline">
              <Link href="/archive">
                {translate({
                  uz: "Barchasini ko'rish",
                  ru: "Смотреть все",
                  en: "View All",
                })}
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {issues.map((issue, index) => (
              <Card key={issue.id || index} className="transition-all hover:shadow-xl group overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-[#0f1629] via-[#1a2844] to-[#0f1629] overflow-hidden">
                  <img
                    src={issue.coverImage || "/placeholder.svg"}
                    alt={`${translate(issue.month)} ${issue.year} Issue`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold">Progressive Science and Research</p>
                    <p className="text-xs opacity-90">
                      {translate(issue.month)} {issue.year}
                    </p>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>
                    {translate({
                      uz: `Jild ${issue.volume}, № ${issue.issue}`,
                      ru: `Том ${issue.volume}, № ${issue.issue}`,
                      en: `Vol. ${issue.volume}, No. ${issue.issue}`,
                    })}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {translate(issue.month)} {issue.year}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {issue.articles}{" "}
                    {translate({
                      uz: "maqola nashr etilgan",
                      ru: "опубликованных статей",
                      en: "articles published",
                    })}
                  </p>
                  <Button asChild className="w-full" variant="secondary">
                    <Link href={`/archive/${issue.year}/${issue.issue}`}>
                      {translate({
                        uz: "Sonni o'qish",
                        ru: "Читать выпуск",
                        en: "Read Issue",
                      })}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { FileText, Download, Search, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const mockIssues = [
  {
    id: "2024-12",
    volume: 2,
    issue: 12,
    month: "December",
    monthUz: "Dekabr",
    monthRu: "Декабрь",
    year: 2024,
    articles: 24,
    published: "2024-12-25",
    coverImage: "/academic-journal-cover-december.jpg",
  },
  {
    id: "2024-11",
    volume: 2,
    issue: 11,
    month: "November",
    monthUz: "Noyabr",
    monthRu: "Ноябрь",
    year: 2024,
    articles: 28,
    published: "2024-11-25",
    coverImage: "/academic-journal-cover-november.jpg",
  },
  {
    id: "2024-10",
    volume: 2,
    issue: 10,
    month: "October",
    monthUz: "Oktyabr",
    monthRu: "Октябрь",
    year: 2024,
    articles: 22,
    published: "2024-10-25",
    coverImage: "/academic-journal-cover-october.jpg",
  },
  {
    id: "2024-09",
    volume: 2,
    issue: 9,
    month: "September",
    monthUz: "Sentyabr",
    monthRu: "Сентябрь",
    year: 2024,
    articles: 26,
    published: "2024-09-25",
    coverImage: "/academic-journal-cover-september.jpg",
  },
  {
    id: "2024-08",
    volume: 2,
    issue: 8,
    month: "August",
    monthUz: "Avgust",
    monthRu: "Август",
    year: 2024,
    articles: 20,
    published: "2024-08-25",
    coverImage: "/academic-journal-cover-august.jpg",
  },
  {
    id: "2024-07",
    volume: 2,
    issue: 7,
    month: "July",
    monthUz: "Iyul",
    monthRu: "Июль",
    year: 2024,
    articles: 25,
    published: "2024-07-25",
    coverImage: "/academic-journal-cover-july.jpg",
  },
]

export default function ArchivePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedYear, setSelectedYear] = useState("all")
  const { language } = useLanguage()

  const translations = {
    uz: {
      title: "Arxiv",
      subtitle: "Progressiv fan va tadqiqotning barcha nashr etilgan sonlarini ko'rib chiqing",
      search: "Oy yoki yil bo'yicha qidirish...",
      filterByYear: "Yil bo'yicha filtrlash",
      allYears: "Barcha yillar",
      noResults: "Qidiruv mezonlariga mos hech qanday nashr topilmadi.",
      articles: "maqola",
      viewIssue: "Jurnalni ko'rish",
      volume: "Jild",
    },
    ru: {
      title: "Архив",
      subtitle: "Просмотрите все опубликованные выпуски журнала Прогрессивная наука и исследования",
      search: "Поиск по месяцу или году...",
      filterByYear: "Фильтр по году",
      allYears: "Все годы",
      noResults: "Выпуски, соответствующие вашим критериям поиска, не найдены.",
      articles: "статей",
      viewIssue: "Просмотреть выпуск",
      volume: "Том",
    },
    en: {
      title: "Archive",
      subtitle: "Browse all published issues of Progressive Science and Research",
      search: "Search by month or year...",
      filterByYear: "Filter by year",
      allYears: "All Years",
      noResults: "No issues found matching your search criteria.",
      articles: "articles",
      viewIssue: "View Issue",
      volume: "Vol.",
    },
  }

  const t = translations[language]

  const years = Array.from(new Set(mockIssues.map((issue) => issue.year.toString())))

  const filteredIssues = mockIssues.filter((issue) => {
    const matchesSearch =
      searchQuery === "" ||
      issue.month.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.monthUz.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.monthRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.year.toString().includes(searchQuery)
    const matchesYear = selectedYear === "all" || issue.year.toString() === selectedYear
    return matchesSearch && matchesYear
  })

  const getMonthName = (issue: (typeof mockIssues)[0]) => {
    if (language === "uz") return issue.monthUz
    if (language === "ru") return issue.monthRu
    return issue.month
  }

  return (
    <main className="bg-background">
      <section className="border-b bg-gradient-to-br from-[#1a2332] via-[#2a3d5c] to-[#1a2332] py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-balance">{t.title}</h1>
          <p className="max-w-2xl text-lg text-blue-200 text-pretty">{t.subtitle}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t.filterByYear} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.allYears}</SelectItem>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredIssues.length === 0 ? (
            <div className="rounded-lg border bg-card p-12 text-center">
              <p className="text-muted-foreground">{t.noResults}</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredIssues.map((issue) => (
                <Card key={issue.id} className="group transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 overflow-hidden rounded-lg bg-muted">
                      <img
                        src={issue.coverImage || "/placeholder.svg"}
                        alt={`${getMonthName(issue)} ${issue.year} issue cover`}
                        className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardTitle className="text-lg">
                      {t.volume} {issue.volume}, No. {issue.issue}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {getMonthName(issue)} {issue.year}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span>
                        {issue.articles} {t.articles}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1" size="sm">
                        <Link href={`/archive/${issue.year}/${issue.issue}`}>{t.viewIssue}</Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

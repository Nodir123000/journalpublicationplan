import { FileText, Download, Calendar, User, Tag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { notFound } from "next/navigation"

const mockArticles = [
  {
    id: 1,
    title: "Machine Learning Applications in Medical Diagnosis: A Comprehensive Review",
    titleRu: "Применение машинного обучения в медицинской диагностике: всесторонний обзор",
    titleUz: "Tibbiy diagnostikada mashinali o'rganishning qo'llanilishi: keng qamrovli sharh",
    authors: ["Dr. Sarah Johnson", "Prof. Michael Chen"],
    affiliation: "Stanford University Medical Center",
    pages: "1-12",
    doi: "10.12345/psr.2024.12.001",
    keywords: ["machine learning", "medical diagnosis", "artificial intelligence", "healthcare"],
    field: "Medical Sciences",
  },
  {
    id: 2,
    title: "Sustainable Urban Development: Challenges and Opportunities in Central Asia",
    titleRu: "Устойчивое городское развитие: вызовы и возможности в Центральной Азии",
    titleUz: "Barqaror shahar rivojlanishi: Markaziy Osiyodagi muammolar va imkoniyatlar",
    authors: ["Dr. Alisher Karimov", "Dr. Elena Petrova"],
    affiliation: "Tashkent State University of Economics",
    pages: "13-24",
    doi: "10.12345/psr.2024.12.002",
    keywords: ["urban development", "sustainability", "Central Asia", "city planning"],
    field: "Economics & Urban Planning",
  },
  {
    id: 3,
    title: "Quantum Computing: From Theory to Practical Applications",
    titleRu: "Квантовые вычисления: от теории к практическим применениям",
    titleUz: "Kvant hisoblash: nazariyadan amaliy qo'llanmalarga",
    authors: ["Prof. James Anderson", "Dr. Li Wei"],
    affiliation: "MIT Computer Science Department",
    pages: "25-38",
    doi: "10.12345/psr.2024.12.003",
    keywords: ["quantum computing", "quantum algorithms", "cryptography", "technology"],
    field: "Computer Science",
  },
  {
    id: 4,
    title: "The Impact of Climate Change on Agricultural Productivity in Uzbekistan",
    titleRu: "Влияние изменения климата на продуктивность сельского хозяйства в Узбекистане",
    titleUz: "Iqlim o'zgarishining O'zbekistonda qishloq xo'jaligi samaradorligiga ta'siri",
    authors: ["Dr. Nodira Abdullayeva"],
    affiliation: "Tashkent Institute of Irrigation and Agricultural Mechanization",
    pages: "39-52",
    doi: "10.12345/psr.2024.12.004",
    keywords: ["climate change", "agriculture", "Uzbekistan", "crop productivity"],
    field: "Agricultural Sciences",
  },
]

export default async function IssueDetailPage({
  params,
}: {
  params: Promise<{ year: string; issue: string }>
}) {
  const { year, issue } = await params

  if (!year || !issue) {
    notFound()
  }

  const issueData = {
    volume: 2,
    issue: Number.parseInt(issue),
    month: "December",
    year: Number.parseInt(year),
    published: `${year}-12-25`,
    articles: mockArticles.length,
  }

  return (
    <main className="bg-background">
      <section className="border-b bg-gradient-to-br from-[#1a2332] via-[#2a3d5c] to-[#1a2332] py-16 text-white">
        <div className="container mx-auto px-4">
          <Link href="/archive" className="mb-4 inline-block text-sm text-blue-200 hover:text-white">
            ← Back to Archive
          </Link>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Volume {issueData.volume}, Issue {issueData.issue}
          </h1>
          <p className="mb-4 text-lg text-blue-200">
            {issueData.month} {issueData.year}
          </p>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            <span>Published: {issueData.published}</span>
            <span className="mx-2">•</span>
            <FileText className="h-4 w-4" />
            <span>{issueData.articles} articles</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Articles in This Issue</h2>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Full Issue
            </Button>
          </div>

          <div className="space-y-6">
            {mockArticles.map((article) => (
              <Card key={article.id} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <Badge variant="secondary" className="shrink-0">
                      {article.field}
                    </Badge>
                    <span className="text-sm text-muted-foreground">Pages {article.pages}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                  <p className="text-sm italic text-muted-foreground">{article.titleRu}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <User className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{article.authors.join(", ")}</p>
                        <p className="text-xs text-muted-foreground">{article.affiliation}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Tag className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                      <div className="flex flex-wrap gap-1">
                        {article.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-xs text-muted-foreground">DOI: {article.doi}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Abstract
                      </Button>
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// Local storage utilities for articles and journal data

export interface Article {
  id: string
  authorNameUz: string
  authorNameRu: string
  authorNameEn: string
  email: string
  phone: string
  phoneAdditional?: string
  workplaceUz: string
  workplaceRu: string
  workplaceEn: string
  positionUz: string
  positionRu: string
  positionEn: string
  titleUz: string
  titleRu: string
  titleEn: string
  fieldOfScience: string
  keywordsUz: string
  keywordsRu: string
  keywordsEn: string
  fileName: string
  fileData: string // base64 encoded file
  status: "pending" | "approved" | "rejected"
  submittedAt: string
}

export interface JournalIssue {
  id: string
  volume: string
  issue: string
  month: { uz: string; ru: string; en: string }
  year: string
  articles: number
  coverImage: string // base64 encoded image
  createdAt: string
}

const ARTICLES_KEY = "journal_articles"
const ISSUES_KEY = "journal_issues"

// Article functions
export function saveArticle(article: Article): void {
  const articles = getArticles()
  articles.push(article)
  localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles))
}

export function getArticles(): Article[] {
  if (typeof window === "undefined") return []
  const data = localStorage.getItem(ARTICLES_KEY)
  return data ? JSON.parse(data) : []
}

export function updateArticleStatus(id: string, status: Article["status"]): void {
  const articles = getArticles()
  const index = articles.findIndex((a) => a.id === id)
  if (index !== -1) {
    articles[index].status = status
    localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles))
  }
}

export function deleteArticle(id: string): void {
  const articles = getArticles().filter((a) => a.id !== id)
  localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles))
}

// Journal issue functions
export function saveJournalIssue(issue: JournalIssue): void {
  const issues = getJournalIssues()
  issues.push(issue)
  localStorage.setItem(ISSUES_KEY, JSON.stringify(issues))
}

export function getJournalIssues(): JournalIssue[] {
  if (typeof window === "undefined") return []
  const data = localStorage.getItem(ISSUES_KEY)
  return data ? JSON.parse(data) : []
}

export function updateJournalIssue(id: string, updates: Partial<JournalIssue>): void {
  const issues = getJournalIssues()
  const index = issues.findIndex((i) => i.id === id)
  if (index !== -1) {
    issues[index] = { ...issues[index], ...updates }
    localStorage.setItem(ISSUES_KEY, JSON.stringify(issues))
  }
}

export function deleteJournalIssue(id: string): void {
  const issues = getJournalIssues().filter((i) => i.id !== id)
  localStorage.setItem(ISSUES_KEY, JSON.stringify(issues))
}

// File conversion utilities
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export function base64ToBlob(base64: string): Blob {
  const parts = base64.split(";base64,")
  const contentType = parts[0].split(":")[1]
  const raw = window.atob(parts[1])
  const rawLength = raw.length
  const uInt8Array = new Uint8Array(rawLength)

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i)
  }

  return new Blob([uInt8Array], { type: contentType })
}

export function downloadFile(base64: string, fileName: string): void {
  const blob = base64ToBlob(base64)
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

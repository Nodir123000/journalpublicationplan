"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/language-context"

export function Breadcrumbs() {
  const pathname = usePathname()
  const { language } = useLanguage()

  const translations = {
    uz: {
      home: "Bosh sahifa",
      "for-authors": "Mualliflar uchun",
      "submission-guidelines": "Topshirish qoidalari",
      "editorial-board": "Tahririyat hay'ati",
      about: "Jurnal haqida",
      contact: "Aloqa",
      archive: "Arxiv",
      "submit-article": "Maqola topshirish",
      admin: "Administrator paneli",
    },
    ru: {
      home: "Главная",
      "for-authors": "Для авторов",
      "submission-guidelines": "Правила подачи",
      "editorial-board": "Редакционная коллегия",
      about: "О журнале",
      contact: "Контакты",
      archive: "Архив",
      "submit-article": "Подать статью",
      admin: "Панель администратора",
    },
    en: {
      home: "Home",
      "for-authors": "For Authors",
      "submission-guidelines": "Submission Guidelines",
      "editorial-board": "Editorial Board",
      about: "About",
      contact: "Contact",
      archive: "Archive",
      "submit-article": "Submit Article",
      admin: "Admin Panel",
    },
  }

  const t = translations[language]

  const segments = pathname.split("/").filter(Boolean)

  if (segments.length === 0) return null

  return (
    <nav className="bg-muted/30 py-3 border-b">
      <div className="container">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>{t.home}</span>
            </Link>
          </li>
          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/")
            const isLast = index === segments.length - 1
            const label = t[segment as keyof typeof t] || segment

            return (
              <li key={href} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                {isLast ? (
                  <span className="font-medium text-foreground">{label}</span>
                ) : (
                  <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import { useToast } from "@/hooks/use-toast"

const languages = [
  { code: "uz", name: "O'zbek" },
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { toast } = useToast()
  const [hasInitialized, setHasInitialized] = useState(false)

  useEffect(() => {
    if (!hasInitialized) {
      setHasInitialized(true)
      return
    }

    const translations = {
      uz: {
        title: "Til o'zgartirildi",
        description: "Interfeys tili o'zbek tiliga o'zgartirildi",
      },
      ru: {
        title: "Язык изменен",
        description: "Язык интерфейса изменен на русский",
      },
      en: {
        title: "Language changed",
        description: "Interface language changed to English",
      },
    }

    const t = translations[language]

    toast({
      title: t.title,
      description: t.description,
      duration: 2000,
    })
  }, [language, toast, hasInitialized])

  const navigation = [
    {
      name: language === "uz" ? "Bosh sahifa" : language === "ru" ? "Главная" : "Home",
      href: "/",
    },
    {
      name: language === "uz" ? "Jurnal haqida" : language === "ru" ? "О журнале" : "About",
      href: "/about",
    },
    {
      name: language === "uz" ? "Tahririyat hay'ati" : language === "ru" ? "Редакционная коллегия" : "Editorial Board",
      href: "/editorial-board",
    },
    {
      name: language === "uz" ? "Mualliflar uchun" : language === "ru" ? "Для авторов" : "For Authors",
      href: "/for-authors",
    },
    {
      name: language === "uz" ? "Arxiv" : language === "ru" ? "Архив" : "Archive",
      href: "/archive",
    },
    {
      name: language === "uz" ? "Aloqa" : language === "ru" ? "Контакты" : "Contact",
      href: "/contact",
    },
  ]

  const submitButtonText =
    language === "uz" ? "Maqola yuborish" : language === "ru" ? "Подать статью" : "Submit Article"

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-shadow hover:shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a2332] text-white">
            <span className="text-xl font-bold">PSR</span>
          </div>
          <div className="hidden flex-col md:flex">
            <span className="text-sm font-semibold text-foreground">Progressive Science</span>
            <span className="text-xs text-muted-foreground">International Journal</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                {languages.find((l) => l.code === language)?.name}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code as "uz" | "en" | "ru")}>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/submit-article">{submitButtonText}</Link>
          </Button>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <Link href="/submit-article">{submitButtonText}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

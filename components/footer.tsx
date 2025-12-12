"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()

  const translate = (text: { uz: string; ru: string; en: string }) => text[language]

  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {translate({
                uz: "Jurnal haqida",
                ru: "О журнале",
                en: "About Journal",
              })}
            </h3>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              {translate({
                uz: "Barcha fanlar bo'yicha tadqiqotlarni nashr etuvchi xalqaro ilmiy-amaliy jurnal.",
                ru: "Международный научно-практический журнал, публикующий исследования по всем дисциплинам.",
                en: "International scientific and practical journal publishing research across all disciplines.",
              })}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {translate({
                uz: "Tezkor havolalar",
                ru: "Быстрые ссылки",
                en: "Quick Links",
              })}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {translate({
                    uz: "Biz haqimizda",
                    ru: "О нас",
                    en: "About Us",
                  })}
                </Link>
              </li>
              <li>
                <Link
                  href="/for-authors"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {translate({
                    uz: "Mualliflar uchun",
                    ru: "Для авторов",
                    en: "For Authors",
                  })}
                </Link>
              </li>
              <li>
                <Link
                  href="/archive"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {translate({
                    uz: "Arxiv",
                    ru: "Архив",
                    en: "Archive",
                  })}
                </Link>
              </li>
              <li>
                <Link
                  href="/editorial-board"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {translate({
                    uz: "Tahririyat hay'ati",
                    ru: "Редакционная коллегия",
                    en: "Editorial Board",
                  })}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {translate({
                uz: "Resurslar",
                ru: "Ресурсы",
                en: "Resources",
              })}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/submission-guidelines"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {translate({
                    uz: "Topshirish qoidalari",
                    ru: "Правила подачи",
                    en: "Submission Guidelines",
                  })}
                </Link>
              </li>
              <li>
                <Link
                  href="/for-authors"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {translate({
                    uz: "Mualliflar uchun",
                    ru: "Для авторов",
                    en: "For Authors",
                  })}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {translate({
                    uz: "Aloqa",
                    ru: "Связаться с нами",
                    en: "Contact Us",
                  })}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {translate({
                uz: "Aloqa",
                ru: "Контакты",
                en: "Contact",
              })}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <span className="text-primary-foreground/80">
                  {translate({
                    uz: "Mirzo Ulug'bek tumani, Toshkent, O'zbekiston",
                    ru: "Мирзо-Улугбекский район, Ташкент, Узбекистан",
                    en: "Mirzo-Ulugbek district, Tashkent, Uzbekistan",
                  })}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:info@psrjournal.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@psrjournal.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span className="text-primary-foreground/80">+998 XX XXX XX XX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="WELLPROG"
                width={60}
                height={60}
                className="rounded-lg border p-2"
              />
              <div>
                <p className="text-sm font-semibold text-primary-foreground/90">
                  {translate({
                    uz: "Veb-saytni ishlab chiquvchi:",
                    ru: "Разработчик сайта:",
                    en: "Website Developer:",
                  })}
                </p>
                <p className="text-lg font-bold text-primary-foreground">WELLPROG MCHJ</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@wellprog.uz" className="hover:text-primary-foreground transition-colors">
                  info@wellprog.uz
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+998997296384" className="hover:text-primary-foreground transition-colors">
                    +998 99 729 63 84
                  </a>
                  <a href="tel:+998975923990" className="hover:text-primary-foreground transition-colors">
                    +998 97 592 39 90
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>
            {translate({
              uz: `© ${new Date().getFullYear()} Progressiv fan va tadqiqot. Barcha huquqlar himoyalangan.`,
              ru: `© ${new Date().getFullYear()} Прогрессивная наука и исследования. Все права защищены.`,
              en: `© ${new Date().getFullYear()} Progressive Science and Research. All rights reserved.`,
            })}
          </p>
        </div>
      </div>
    </footer>
  )
}

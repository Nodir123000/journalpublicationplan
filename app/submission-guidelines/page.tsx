"use client"

import { Download, FileCheck, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function SubmissionGuidelinesPage() {
  const { language } = useLanguage()

  const content = {
    uz: {
      title: "Topshirish qoidalari",
      subtitle: "Mualliflar uchun batafsil topshirish qoidalari va talablari",
      template: "Shablon",
      downloadTemplate: "Shablonni yuklash",
      fullGuidelines: "To'liq qoidalar",
      downloadPDF: "PDF yuklash",
      contact: "Aloqa",
      contactDesc: "Savollaringiz bormi? Tahririyat ofisi bilan bog'laning",
      contactUs: "Biz bilan bog'lanish",
      quickChecklist: "Tez tekshirish ro'yxati",
      check1: "MS Word, Times New Roman, 14 o'lchamda yozilgan maqola",
      check2: "Jadval, rasm va adabiyotlar bilan birga 8-10 sahifa",
      check3: "O'zbek, rus va ingliz tillarida sarlavha, annotatsiya va kalit so'zlar",
      check4: "Maqola boshida UDK kodi ko'rsatilgan",
      check5: "So'nggi 10 yildagi adabiyotlar (tavsiya etiladi)",
      check6: "Uch tilda barcha muallif ma'lumotlari berilgan",
      check7: "Aloqa ma'lumotlari: email, ish va uyali telefon raqamlari",
      check8: "Har oyning 15-kunigacha topshirilgan",
      importantNotes: "Muhim eslatmalar",
      note1:
        "Maqolalarda faqat eng zarur matematik ifodalar bo'lishi kerak. Rasmlar, sxemalar va grafiklar 6x9 sm hajmidan oshmasligi kerak.",
      note2:
        "Bo'lim sarlavhalari alohida qatorda, chapga tekislangan holda qalin shriftda yozilishi kerak. Paragraf sarlavhalari matnning birinchi qatoriga (qalin shriftda) kiritilishi kerak.",
      note3:
        "Topshirilgan barcha materiallarning originallik tekshiruvi o'tkaziladi. Tahririyat hey'ati talablariga javob bermaydigan materiallar chop etilmaydi va hech qanday da'volar qabul qilinmaydi.",
      note4: "Ushbu talablarga javob bermaydigan maqolalar ko'rib chiqilmaydi. Maqolalar mualliflarga qaytarilmaydi.",
      submitArticle: "Maqolangizni yuboring",
    },
    ru: {
      title: "Правила подачи",
      subtitle: "Подробные правила подачи и требования к оформлению для авторов",
      template: "Шаблон",
      downloadTemplate: "Скачать шаблон",
      fullGuidelines: "Полные правила",
      downloadPDF: "Скачать PDF",
      contact: "Контакты",
      contactDesc: "Есть вопросы? Свяжитесь с редакцией",
      contactUs: "Связаться с нами",
      quickChecklist: "Краткий чек-лист",
      check1: "Статья написана в MS Word, Times New Roman, размер 14",
      check2: "8-10 страниц, включая таблицы, рисунки и список литературы",
      check3: "Название, аннотация и ключевые слова на узбекском, русском и английском языках",
      check4: "УДК код указан в начале статьи",
      check5: "Литература за последние 10 лет (рекомендуется)",
      check6: "Вся информация об авторе предоставлена на трех языках",
      check7: "Контактная информация: email, рабочий и мобильный телефоны",
      check8: "Подана до 15-го числа месяца",
      importantNotes: "Важные примечания",
      note1:
        "Статьи должны содержать только самые необходимые математические выражения. Рисунки, схемы и графики не должны превышать размер 6x9 см.",
      note2:
        "Заголовки разделов должны быть набраны жирным шрифтом на отдельной строке, выровнены по левому краю. Заголовки параграфов должны быть включены в первую строку текста (жирным шрифтом).",
      note3:
        "Будет проверена оригинальность всех представленных материалов. Материалы, не соответствующие требованиям Редакционной коллегии, не будут опубликованы, и никакие претензии не будут приняты.",
      note4: "Статьи, не соответствующие этим требованиям, не будут рассмотрены. Статьи авторам не возвращаются.",
      submitArticle: "Подать статью",
    },
    en: {
      title: "Submission Guidelines",
      subtitle: "Comprehensive formatting and submission requirements for all authors",
      template: "Template",
      downloadTemplate: "Download Template",
      fullGuidelines: "Full Guidelines",
      downloadPDF: "Download PDF",
      contact: "Contact",
      contactDesc: "Have questions? Contact our editorial office",
      contactUs: "Contact Us",
      quickChecklist: "Quick Checklist",
      check1: "Article written in MS Word, Times New Roman, size 14",
      check2: "8-10 pages including tables, figures, and references",
      check3: "Title, abstract, and keywords in Uzbek, Russian, and English",
      check4: "UDC code included at the top of the article",
      check5: "References from the last 10 years (recommended)",
      check6: "All author information provided in three languages",
      check7: "Contact information: email, work and mobile phone numbers",
      check8: "Submitted before the 15th of the month",
      importantNotes: "Important Notes",
      note1:
        "Articles must include only the most necessary mathematical expressions. Figures, schemes, and graphs should not exceed 6x9 cm in size.",
      note2:
        "Section titles should be typed in bold on a separate line, aligned to the left. Paragraph titles should be included in the first line of the text (in bold).",
      note3:
        "The originality of all submitted materials will be checked. Materials that do not meet the Editorial Board's requirements will not be published, and no claims will be accepted.",
      note4: "Articles not meeting these requirements will not be considered. Articles are not returned to authors.",
      submitArticle: "Submit Your Article",
    },
  }

  const t = content[language]

  return (
    <main className="bg-background">
      <section className="border-b bg-gradient-to-br from-[#1a2332] via-[#2a3d5c] to-[#1a2332] py-16 text-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t.title}</h1>
          <p className="max-w-2xl text-lg text-blue-200">{t.subtitle}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                  <FileCheck className="h-6 w-6" />
                </div>
                <CardTitle>{t.template}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{t.downloadTemplate}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  onClick={() => {
                    // TODO: Add actual template file
                    alert(
                      language === "uz"
                        ? "Shablon hozircha tayyorlanmoqda"
                        : language === "ru"
                          ? "Шаблон готовится"
                          : "Template coming soon",
                    )
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t.downloadTemplate}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                  <Download className="h-6 w-6" />
                </div>
                <CardTitle>{t.fullGuidelines}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{t.downloadPDF}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  onClick={() => {
                    alert(
                      language === "uz"
                        ? "PDF hozircha tayyorlanmoqda"
                        : language === "ru"
                          ? "PDF готовится"
                          : "PDF coming soon",
                    )
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t.downloadPDF}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle>{t.contact}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{t.contactDesc}</p>
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                  <Link href="/contact">{t.contactUs}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <section className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-2xl font-bold">{t.quickChecklist}</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1 text-[#1a2332]">✓</span>
                  <span>{t.check1}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1 text-[#1a2332]">✓</span>
                  <span>{t.check2}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1 text-[#1a2332]">✓</span>
                  <span>{t.check3}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1 text-[#1a2332]">✓</span>
                  <span>{t.check4}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1 text-[#1a2332]">✓</span>
                  <span>{t.check5}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1 text-[#1a2332]">✓</span>
                  <span>{t.check6}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1 text-[#1a2332]">✓</span>
                  <span>{t.check7}</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="mt-1 text-[#1a2332]">✓</span>
                  <span>{t.check8}</span>
                </li>
              </ul>
            </section>

            <section className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-2xl font-bold">{t.importantNotes}</h2>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>{t.note1}</p>
                <p>{t.note2}</p>
                <p>{t.note3}</p>
                <p className="font-semibold text-foreground">{t.note4}</p>
              </div>
            </section>

            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/submit-article">{t.submitArticle}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

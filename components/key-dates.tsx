"use client"

import { Calendar, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function KeyDates() {
  const { language } = useLanguage()

  const translate = (text: { uz: string; ru: string; en: string }) => text[language]

  return (
    <section className="border-b bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {translate({
              uz: "Muhim sanalar",
              ru: "Важные даты",
              en: "Important Dates",
            })}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Send className="h-5 w-5 text-[#1a2332]" />
                  <CardTitle>
                    {translate({
                      uz: "Topshirish muddati",
                      ru: "Срок подачи",
                      en: "Submission Deadline",
                    })}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-[#1a2332]">15</p>
                <p className="text-muted-foreground">
                  {translate({
                    uz: "har oyning",
                    ru: "числа каждого месяца",
                    en: "of each month",
                  })}
                </p>
                <p className="mt-4 text-sm leading-relaxed">
                  {translate({
                    uz: "Barcha maqolalar joriy oyning sonida ko'rib chiqilishi uchun 15-sanagacha topshirilishi kerak.",
                    ru: "Все рукописи должны быть поданы до 15-го числа для рассмотрения в текущем выпуске месяца.",
                    en: "All manuscripts must be submitted by the 15th to be considered for the current month's issue.",
                  })}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#1a2332]" />
                  <CardTitle>
                    {translate({
                      uz: "Nashr sanasi",
                      ru: "Дата публикации",
                      en: "Publication Date",
                    })}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-[#1a2332]">25</p>
                <p className="text-muted-foreground">
                  {translate({
                    uz: "har oyning",
                    ru: "числа каждого месяца",
                    en: "of each month",
                  })}
                </p>
                <p className="mt-4 text-sm leading-relaxed">
                  {translate({
                    uz: "Har oyning 25-sanasida barcha qabul qilingan maqolalar bilan yangi sonlar nashr etiladi.",
                    ru: "Новые выпуски публикуются 25-го числа каждого месяца со всеми принятыми статьями.",
                    en: "New issues are published on the 25th of every month with all accepted articles.",
                  })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

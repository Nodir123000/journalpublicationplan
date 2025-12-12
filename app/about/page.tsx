"use client"

import { BookOpen, Target, Award, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <main className="bg-background">
      <Breadcrumbs />

      <section className="border-b bg-gradient-to-br from-[#1a2332] via-[#2a3d5c] to-[#1a2332] py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {t.aboutTitle || "О журнале"}
          </h1>
          <p className="max-w-2xl text-lg text-blue-200 text-pretty">
            {t.aboutSubtitle || "Международный научно-практический журнал"}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-foreground">{t.overview || "Обзор"}</h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>{t.overviewText1 || "Текст обзора 1"}</p>
              <p>{t.overviewText2 || "Текст обзора 2"}</p>
              <p>{t.overviewText3 || "Текст обзора 3"}</p>
            </div>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{t.mission || "Миссия"}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.missionText || "Текст миссии журнала"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{t.publicationDetails || "Детали публикации"}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">{t.frequency || "Периодичность"}:</strong>{" "}
                    {t.monthly || "Ежемесячно"}
                  </p>
                  <p>
                    <strong className="text-foreground">{t.format || "Формат"}:</strong> {t.electronic || "Электронный"}
                  </p>
                  <p>
                    <strong className="text-foreground">{t.volume || "Объём"}:</strong>{" "}
                    {t.volumeValue || "До 500 страниц"}
                  </p>
                  <p>
                    <strong className="text-foreground">{t.distribution || "Распространение"}:</strong>{" "}
                    {t.international || "Международное"}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{t.forAuthorsShort || "Для авторов"}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{t.forAuthorsText1 || "Публикация в течение 5 дней"}</p>
                  <p>{t.forAuthorsText2 || "Прямая ссылка на статью"}</p>
                  <p>{t.forAuthorsText3 || "Бесплатный сертификат"}</p>
                  <p>{t.forAuthorsText4 || "Строгое рецензирование"}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{t.scope || "Охват"}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.scopeText || "Журнал принимает статьи по всем областям науки"}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              {t.editorialIndependence || "Независимость редакции"}
            </h2>
            <div className="rounded-lg border bg-card p-6">
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                {t.independenceText1 || "Редакционная коллегия сохраняет профессиональную независимость"}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t.independenceText2 || "Деятельность осуществляется в соответствии с законами"}
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground">{t.publicationSchedule || "График публикаций"}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-blue-50 p-6">
                <h3 className="mb-2 text-xl font-semibold text-[#1a2332]">{t.submissionPeriod || "Период подачи"}</h3>
                <p className="text-3xl font-bold text-[#1a2332] tabular-nums">{t.until15th || "До 15-го"}</p>
                <p className="text-sm text-muted-foreground">
                  {t.submissionText || "Статьи принимаются до 15-го числа каждого месяца"}
                </p>
              </div>
              <div className="rounded-lg border bg-blue-50 p-6">
                <h3 className="mb-2 text-xl font-semibold text-[#1a2332]">{t.publicationDate || "Дата публикации"}</h3>
                <p className="text-3xl font-bold text-[#1a2332] tabular-nums">{t.on25th || "25-го"}</p>
                <p className="text-sm text-muted-foreground">
                  {t.publicationText || "Новый выпуск публикуется 25-го числа каждого месяца"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

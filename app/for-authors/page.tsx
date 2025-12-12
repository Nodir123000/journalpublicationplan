"use client"

import { FileText, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function ForAuthorsPage() {
  const { language } = useLanguage()

  const translations = {
    uz: {
      title: "Mualliflar uchun",
      subtitle: "Jurnalga maqola topshirish bo'yicha qoidalar va talablar",
      deadlineAlert: "Muhim muddatlar:",
      deadlineText: "Har oyning 15-kunigacha maqolalar qabul qilinadi. 25-kuni nashr etiladi.",
      submit: "Topshirish",
      submitDesc: "Har oyning 15-kunigacha qo'lyozma topshiring",
      review: "Ko'rib chiqish",
      reviewDesc: "Barcha maqolalar qattiq taqrizdan o'tadi",
      publish: "Nashr etish",
      publishDesc: "Qabul qilingan maqolalar 25-kuni nashr etiladi va bepul sertifikat beriladi",
      documentRequirements: "Hujjat talablari",
      readyToSubmit: "Yuborishga tayyormisiz?",
      readyToSubmitDesc: "Qoidalarimizni ko'rib chiqing va maqolangizni yuboring",
      submitArticle: "Maqola topshirish",
      contactOffice: "Tahririyat bilan bog'lanish",
    },
    ru: {
      title: "Для авторов",
      subtitle: "Правила и требования к оформлению статей для журнала",
      deadlineAlert: "Важные сроки:",
      deadlineText: "Прием статей до 15-го числа каждого месяца. Публикация 25-го числа.",
      submit: "Подача",
      submitDesc: "Отправьте рукопись до 15-го числа каждого месяца",
      review: "Рецензирование",
      reviewDesc: "Все статьи проходят строгую экспертную оценку",
      publish: "Публикация",
      publishDesc: "Принятые статьи публикуются 25-го числа с бесплатным сертификатом автора",
      documentRequirements: "Требования к документам",
      readyToSubmit: "Готовы подать статью?",
      readyToSubmitDesc: "Просмотрите наши правила и отправьте свою статью",
      submitArticle: "Подать статью",
      contactOffice: "Связаться с редакцией",
    },
    en: {
      title: "For Authors",
      subtitle: "Guidelines and requirements for submitting articles to our journal",
      deadlineAlert: "Important Deadlines:",
      deadlineText: "Submissions accepted until the 15th of each month. Publication on the 25th.",
      submit: "Submit",
      submitDesc: "Submit your manuscript by the 15th of each month for consideration",
      review: "Review",
      reviewDesc: "All submissions undergo rigorous peer review process",
      publish: "Publish",
      publishDesc: "Accepted articles published on the 25th with free author certificate",
      documentRequirements: "Document Requirements",
      readyToSubmit: "Ready to Submit?",
      readyToSubmitDesc: "Review our guidelines and submit your research",
      submitArticle: "Submit Article",
      contactOffice: "Contact Editorial Office",
    },
  }

  const t = translations[language]

  return (
    <main className="bg-background">
      <section className="border-b bg-gradient-to-br from-[#1a2332] via-[#2a3d5c] to-[#1a2332] py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-balance">{t.title}</h1>
          <p className="max-w-2xl text-lg text-blue-200 text-pretty">{t.subtitle}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <Alert className="mb-8 border-[#1a2332] bg-blue-50">
            <AlertCircle className="h-5 w-5 text-[#1a2332]" />
            <AlertDescription className="text-base">
              <strong>{t.deadlineAlert}</strong> {t.deadlineText}
            </AlertDescription>
          </Alert>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                  <Send className="h-6 w-6" />
                </div>
                <CardTitle>{t.submit}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t.submitDesc}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle>{t.review}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t.reviewDesc}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <CardTitle>{t.publish}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t.publishDesc}</p>
              </CardContent>
            </Card>
          </div>

          {/* Content from original page - keeping English for now, will be translated in next iteration */}
          <div className="space-y-12">
            <section>
              <h2 className="mb-6 text-2xl font-bold text-foreground">{t.documentRequirements}</h2>
              <div className="space-y-4 rounded-lg border bg-card p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#1a2332]" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      {language === "uz" ? "Til" : language === "ru" ? "Язык" : "Language"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "uz"
                        ? "Maqolalar o'zbek, rus yoki ingliz tilida qabul qilinadi. Sarlavha, annotatsiya (8-10 qator, maksimal 500 belgi) va kalit so'zlar uch tilda berilishi kerak."
                        : language === "ru"
                          ? "Статьи принимаются на узбекском, русском или английском языках. Название, аннотация (8-10 строк, максимум 500 символов) и ключевые слова должны быть предоставлены на всех трех языках."
                          : "Articles accepted in Uzbek, Russian, or English. Title, abstract (8-10 lines, max 500 characters), and keywords must be provided in all three languages."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#1a2332]" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      {language === "uz"
                        ? "Muallif ma'lumotlari"
                        : language === "ru"
                          ? "Информация об авторе"
                          : "Author Information"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "uz"
                        ? "To'liq ismi, ish joyi, lavozim, manzil, email va telefon raqamlar uch tilda berilishi kerak."
                        : language === "ru"
                          ? "Полные имена, место работы, должность, адреса, email и телефонные номера должны быть предоставлены на трех языках."
                          : "Full names, workplace, position, addresses, email and phone numbers must be provided in three languages."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#1a2332]" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      {language === "uz"
                        ? "Elektron topshirish"
                        : language === "ru"
                          ? "Электронная подача"
                          : "Electronic Submission"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "uz"
                        ? "Maqolaning elektron versiyasi tahririyatga topshirilishi kerak."
                        : language === "ru"
                          ? "Электронная версия статьи должна быть предоставлена в редакцию."
                          : "Electronic version of the article must be submitted to the editorial office."}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex flex-col items-center gap-4 rounded-lg bg-muted p-8 text-center">
              <h2 className="text-2xl font-bold">{t.readyToSubmit}</h2>
              <p className="max-w-xl text-muted-foreground">{t.readyToSubmitDesc}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/submit-article">{t.submitArticle}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">{t.contactOffice}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

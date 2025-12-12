"use client"

import { CheckCircle, Globe, Zap, Link2, Users, Award, Database } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Features() {
  const { language } = useLanguage()

  const translate = (text: { uz: string; ru: string; en: string }) => text[language]

  const features = [
    {
      uz: "Ochiq kirish nashriyoti modeli",
      ru: "Модель публикации открытого доступа",
      en: "Open access publishing model",
      icon: Globe,
    },
    {
      uz: "Tez ko'rib chiqish jarayoni",
      ru: "Быстрая процедура рецензирования",
      en: "Fast peer review process",
      icon: Zap,
    },
    {
      uz: "Barcha maqolalar uchun DOI tayinlash",
      ru: "Присвоение DOI всем статьям",
      en: "DOI assignment for all articles",
      icon: Link2,
    },
    {
      uz: "Xalqaro tahririyat hay'ati",
      ru: "Международная редакционная коллегия",
      en: "International editorial board",
      icon: Users,
    },
    {
      uz: "Mualliflarga sertifikatlar taqdim etiladi",
      ru: "Авторам предоставляются сертификаты",
      en: "Author certificates provided",
      icon: Award,
    },
    {
      uz: "Asosiy ma'lumotlar bazalarida indekslanadi",
      ru: "Индексируется в основных базах данных",
      en: "Indexed in major databases",
      icon: Database,
    },
  ]

  return (
    <section className="bg-muted py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            {translate({
              uz: "Nima uchun biz bilan nashr etish kerak",
              ru: "Почему стоит публиковаться у нас",
              en: "Why Publish With Us",
            })}
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {translate({
              uz: "Mualliflarimizga eng yaxshi xizmatlarni taqdim etamiz",
              ru: "Мы предоставляем лучшие услуги нашим авторам",
              en: "We provide the best services to our authors",
            })}
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-background p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50 hover:-translate-y-1"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-10 w-10 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-base leading-relaxed">{translate(feature)}</p>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

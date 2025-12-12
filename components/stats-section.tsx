"use client"

import { AnimatedCounter } from "@/components/animated-counter"
import { FileText, Users, BookOpen, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function StatsSection() {
  const { language } = useLanguage()

  const translations = {
    uz: {
      title: "Bizning yutuqlarimiz",
      articles: "Nashr etilgan maqolalar",
      authors: "Mualliflar",
      issues: "Jurnallar",
      citations: "Iqtiboslar",
    },
    ru: {
      title: "Наши достижения",
      articles: "Опубликованных статей",
      authors: "Авторов",
      issues: "Выпусков",
      citations: "Цитирований",
    },
    en: {
      title: "Our Achievements",
      articles: "Published Articles",
      authors: "Authors",
      issues: "Issues",
      citations: "Citations",
    },
  }

  const t = translations[language]

  const stats = [
    { icon: FileText, value: 487, label: t.articles },
    { icon: Users, value: 312, label: t.authors },
    { icon: BookOpen, value: 24, label: t.issues },
    { icon: Award, value: 1250, label: t.citations },
  ]

  return (
    <section className="py-20  bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">{t.title}</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {language === "uz" && "Raqamlarda bizning muvaffaqiyatlarimiz"}
          {language === "ru" && "Наши достижения в цифрах"}
          {language === "en" && "Our achievements in numbers"}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm mb-6 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300 border border-primary/10">
                <stat.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-3 tabular-nums">
                <AnimatedCounter end={stat.value} />
                <span className="text-2xl">+</span>
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

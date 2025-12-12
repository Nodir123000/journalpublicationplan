"use client"

import { useLanguage } from "@/lib/language-context"
import { CheckCircle2, Clock, Send, FileCheck } from "lucide-react"

export function PublicationTimeline() {
  const { language } = useLanguage()

  const translations = {
    uz: {
      title: "Nashr jarayoni",
      subtitle: "Maqolangiz qanday nashr etiladi",
      step1: "Maqola topshirish",
      step1Desc: "Har oyning 15-kunigacha",
      step2: "Dastlabki tekshiruv",
      step2Desc: "1-3 kun ichida",
      step3: "Taqrizdan o'tkazish",
      step3Desc: "5-10 kun ichida",
      step4: "Nashr etish",
      step4Desc: "Har oyning 25-kuni",
    },
    ru: {
      title: "Процесс публикации",
      subtitle: "Как публикуется ваша статья",
      step1: "Подача статьи",
      step1Desc: "До 15-го числа каждого месяца",
      step2: "Первичная проверка",
      step2Desc: "В течение 1-3 дней",
      step3: "Рецензирование",
      step3Desc: "В течение 5-10 дней",
      step4: "Публикация",
      step4Desc: "25-го числа каждого месяца",
    },
    en: {
      title: "Publication Process",
      subtitle: "How your article gets published",
      step1: "Article Submission",
      step1Desc: "Until the 15th of each month",
      step2: "Initial Review",
      step2Desc: "Within 1-3 days",
      step3: "Peer Review",
      step3Desc: "Within 5-10 days",
      step4: "Publication",
      step4Desc: "On the 25th of each month",
    },
  }

  const t = translations[language]

  const steps = [
    { icon: Send, title: t.step1, desc: t.step1Desc },
    { icon: Clock, title: t.step2, desc: t.step2Desc },
    { icon: FileCheck, title: t.step3, desc: t.step3Desc },
    { icon: CheckCircle2, title: t.step4, desc: t.step4Desc },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-balance">{t.title}</h2>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-8 right-8 h-0.5 bg-border hidden md:block" />

            <div className="grid md:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-4 relative z-10 shadow-lg hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold mb-2 text-pretty">{step.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

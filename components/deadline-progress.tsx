"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function DeadlineProgress() {
  const [progress, setProgress] = useState(0)
  const [daysLeft, setDaysLeft] = useState(0)
  const { language } = useLanguage()

  useEffect(() => {
    const now = new Date()
    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()
    const deadline = new Date(currentYear, currentMonth, 15, 23, 59, 59)

    // If we're past the 15th, show next month's deadline
    if (now.getDate() > 15) {
      deadline.setMonth(currentMonth + 1)
    }

    const startOfMonth = new Date(deadline.getFullYear(), deadline.getMonth(), 1)
    const totalDays = 15
    const daysPassed = Math.max(0, now.getDate())
    const daysRemaining = Math.max(0, 15 - daysPassed)

    setDaysLeft(daysRemaining)
    setProgress((daysPassed / totalDays) * 100)
  }, [])

  const translations = {
    uz: {
      deadline: "Keyingi muddatgacha",
      days: "kun qoldi",
      submit: "Maqola topshiring",
    },
    ru: {
      deadline: "До следующего дедлайна",
      days: "дней осталось",
      submit: "Подайте статью",
    },
    en: {
      deadline: "Until next deadline",
      days: "days left",
      submit: "Submit article",
    },
  }

  const t = translations[language]

  return (
    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">{t.deadline}</h3>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <Clock className="w-5 h-5 text-accent" />
        <span className="text-3xl font-bold text-primary tabular-nums">{daysLeft}</span>
        <span className="text-muted-foreground">{t.days}</span>
      </div>

      <Progress value={progress} className="h-3 mb-3" />

      <p className="text-sm text-muted-foreground">{t.submit}</p>
    </div>
  )
}

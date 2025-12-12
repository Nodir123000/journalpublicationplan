"use client"

import { useLanguage } from "@/lib/language-context"

export function AboutJournal() {
  const { language } = useLanguage()

  const translate = (text: { uz: string; ru: string; en: string }) => text[language]

  return (
    <section className="border-b bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {translate({
              uz: "Jurnal haqida",
              ru: "О журнале",
              en: "About the Journal",
            })}
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
            {translate({
              uz: "\"Progressiv fan va tadqiqot\" barcha ilmiy yo'nalishlarda asl tadqiqotlarni nashr etuvchi xalqaro ko'rib chiqiladigan jurnaldir. Biz qat'iy akademik standartlar va ochiq kirish nashriyoti orqali bilimlarni rivojlantirishga sodiqmiz.",
              ru: '"Прогрессивная наука и исследования" - это международный рецензируемый журнал, публикующий оригинальные исследования по всем научным дисциплинам. Мы стремимся к развитию знаний через строгие академические стандарты и публикации открытого доступа.',
              en: '"Progressive Science and Research" is an international peer-reviewed journal publishing original research across all scientific disciplines. We are committed to advancing knowledge through rigorous academic standards and open access publishing.',
            })}
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center group">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                {translate({
                  uz: "Oylik nashr",
                  ru: "Ежемесячная публикация",
                  en: "Monthly Publication",
                })}
              </h3>
              <p className="text-sm text-muted-foreground">
                {translate({
                  uz: "Har oyning 25-sanasida yangi sonlar nashr etiladi",
                  ru: "Новые выпуски публикуются 25-го числа каждого месяца",
                  en: "New issues published on the 25th of each month",
                })}
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                {translate({
                  uz: "Mutaxassis ko'rib chiqish",
                  ru: "Экспертная рецензия",
                  en: "Expert Review",
                })}
              </h3>
              <p className="text-sm text-muted-foreground">
                {translate({
                  uz: "Barcha yuborilgan maqolalar qat'iy ko'rib chiqiladi",
                  ru: "Все материалы проходят строгую экспертную рецензию",
                  en: "All submissions undergo rigorous peer review",
                })}
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                {translate({
                  uz: "Xalqaro miqyos",
                  ru: "Международный охват",
                  en: "International Reach",
                })}
              </h3>
              <p className="text-sm text-muted-foreground">
                {translate({
                  uz: "Butun dunyodagi olimlarning tadqiqotlarini nashr etish",
                  ru: "Публикация исследований ученых со всего мира",
                  en: "Publishing research from scholars worldwide",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

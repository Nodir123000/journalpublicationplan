"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const { language } = useLanguage()

  const translate = (text: { uz: string; ru: string; en: string }) => text[language]

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/80 to-primary text-primary-foreground overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="mb-10 animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <p className="text-sm font-medium text-accent-foreground">
                  ISSN: 2181-1601 | International Scientific Journal
                </p>
              </div>

              <h1 className="mb-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground via-primary-foreground/90 to-primary-foreground">
                  Progressiv fan va tadqiqot
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-light text-balance">
                Xalqaro ilmiy-amaliy jurnal
              </p>
            </div>

            <div className="mb-8 animate-fade-in animation-delay-100">
              <h2 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
                Progressive Science and Research
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 text-balance">
                International Scientific and Practical Journal
              </p>
            </div>

            <div className="mb-12 animate-fade-in animation-delay-200">
              <h2 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
                Прогрессивная наука и исследования
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 text-balance">
                Международный научно-практический журнал
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in animation-delay-300">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 hover:scale-105 transition-all duration-300 shadow-2xl group px-8 py-6 text-lg"
              >
                <Link href="/submit-article">
                  {translate({
                    uz: "Maqola yuborish",
                    ru: "Подать статью",
                    en: "Submit Article",
                  })}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
              >
                <Link href="/archive">
                  {translate({
                    uz: "Arxivni ko'rish",
                    ru: "Просмотреть архив",
                    en: "Browse Archive",
                  })}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-400 hidden lg:block">
            <div className="relative aspect-square max-w-lg mx-auto">
              <Image
                src="/professional-scientist-working-with-research-data-.jpg"
                alt="Scientific Research"
                width={500}
                height={500}
                className="w-full h-full object-contain drop-shadow-2xl"
              />

              {/* Floating elements */}
              <div className="absolute top-10 -right-5 animate-float">
                <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-accent-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-primary-foreground font-semibold text-sm">487+ Articles</p>
                      <p className="text-primary-foreground/70 text-xs">Published</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -left-5 animate-float-delayed">
                <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-accent-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-primary-foreground font-semibold text-sm">312+ Authors</p>
                      <p className="text-primary-foreground/70 text-xs">Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in animation-delay-500 max-w-5xl mx-auto">
          {[
            { number: "487+", label: translate({ uz: "Maqolalar", ru: "Статей", en: "Articles" }) },
            { number: "312+", label: translate({ uz: "Mualliflar", ru: "Авторов", en: "Authors" }) },
            { number: "24", label: translate({ uz: "Sonlar", ru: "Выпусков", en: "Issues" }) },
            { number: "15+", label: translate({ uz: "Mamlakatlar", ru: "Стран", en: "Countries" }) },
          ].map((stat, i) => (
            <div
              key={i}
              className="backdrop-blur-sm bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">{stat.number}</div>
              <div className="text-xs md:text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

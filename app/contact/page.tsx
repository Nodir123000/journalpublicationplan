"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function ContactPage() {
  const { language, t } = useLanguage()

  return (
    <main className="bg-background">
      <Breadcrumbs />

      <section className="border-b bg-gradient-to-br from-[#1a2332] via-[#2a3d5c] to-[#1a2332] py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">{t.contactTitle}</h1>
          <p className="max-w-2xl text-lg text-blue-200 text-pretty">{t.contactSubtitle}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                    <Mail className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mb-2 font-semibold">{t.email}</h3>
                <a href="mailto:info@psrjournal.com" className="text-sm text-[#1a2332] hover:underline">
                  info@psrjournal.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                    <Phone className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mb-2 font-semibold">{t.phone}</h3>
                <p className="text-sm text-muted-foreground">+998 XX XXX XX XX</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                    <MapPin className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mb-2 font-semibold">{t.location}</h3>
                <p className="text-sm text-muted-foreground">Tashkent, Uzbekistan</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                    <Clock className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mb-2 font-semibold">{t.officeHours}</h3>
                <p className="text-sm text-muted-foreground">{t.workingHoursText}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold">{t.editorialAddress}</h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 font-semibold text-[#1a2332]">{t.fullAddress}</h3>
                    <p className="mb-1 text-sm leading-relaxed">{t.addressLine1}</p>
                    <p className="mb-1 text-sm leading-relaxed">{t.addressLine2}</p>
                    <p className="mb-1 text-sm leading-relaxed">{t.addressLine3}</p>
                    <p className="mb-4 text-sm leading-relaxed">{t.addressLine4}</p>
                  </div>
                  <div>
                    <h3 className="mb-3 font-semibold text-[#1a2332]">{t.workingHours}</h3>
                    <p className="mb-2 text-sm">{t.workingHoursText}</p>
                    <p className="mb-2 text-sm text-muted-foreground">{t.timezone}</p>
                    <p className="text-sm text-muted-foreground">{t.closedWeekends}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg bg-muted p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">{t.readySubmit}</h2>
            <p className="mb-6 text-muted-foreground">{t.reviewGuidelinesText}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/submit-article">{t.submitArticle}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/for-authors">{t.viewGuidelines}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

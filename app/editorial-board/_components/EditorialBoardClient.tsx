"use client"

import { Mail, Phone, MapPin, Users } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useLanguage } from "@/lib/language-context"
import { Breadcrumbs } from "@/components/breadcrumbs"

const editorInChief = {
  name: "Dilmurod Rozmetovich Mahmudov",
  nameUz: "Mahmudov Dilmurod Rozmetovich",
  nameRu: "Махмудов Дилмурод Розметович",
  title: "Editor-in-Chief",
  degree: "Doctor of Law (DSc), Associate Professor",
  degreeRu: "Доктор юридических наук (DSc), доцент",
}

const founders = [
  {
    name: "Markaziy Qozog'iston akademiyasi",
    nameEn: "Central Kazakhstan Academy",
    nameRu: "Центрально-Казахстанская академия",
    type: "Academic Institution",
  },
  {
    name: "MM SMART HAUSE GROUP LLC",
    nameRu: 'ООО "MM SMART HAUSE GROUP"',
    type: "Publishing Partner",
  },
]

const editorialTeam = [
  {
    position: "Editor-in-Chief",
    positionRu: "Главный редактор",
    positionUz: "Bosh muharrir",
    name: "Dilmurod R. Mahmudov",
    degree: "DSc, Associate Professor",
  },
  {
    position: "Executive Secretary",
    positionRu: "Ответственный секретарь",
    positionUz: "Mas'ul kotib",
    name: "To be appointed",
    degree: "PhD",
  },
]

export default function EditorialBoardClient() {
  const { language } = useLanguage()

  const content = {
    uz: {
      title: "Tahririyat hay'ati",
      subtitle: "Xalqaro jurnalimizni boshqaradigan taniqli olimlar bilan tanishing",
      editorInChief: "Bosh muharrir",
      editorialTeam: "Tahririyat guruhi",
      founders: "Ta'sischilar",
      contactOffice: "Tahririyat bilan bog'lanish",
      address: "Manzil",
      email: "Elektron pochta",
      phone: "Telefon",
      officeHours: "Ish vaqti",
      importantDates: "Muhim sanalar",
      submissionDeadline: "Topshirish muddati:",
      publicationDate: "Nashr sanasi:",
      monthDay15: "Har oyning 15-kunigacha",
      monthDay25: "Har oyning 25-kunida",
    },
    ru: {
      title: "Редакционная коллегия",
      subtitle: "Познакомьтесь с выдающимися учеными, руководящими нашим международным журналом",
      editorInChief: "Главный редактор",
      editorialTeam: "Редакционная группа",
      founders: "Учредители",
      contactOffice: "Связаться с редакцией",
      address: "Адрес",
      email: "Электронная почта",
      phone: "Телефон",
      officeHours: "Часы работы",
      importantDates: "Важные даты",
      submissionDeadline: "Срок подачи:",
      publicationDate: "Дата публикации:",
      monthDay15: "До 15-го числа каждого месяца",
      monthDay25: "25-го числа каждого месяца",
    },
    en: {
      title: "Editorial Board",
      subtitle: "Meet the distinguished scholars leading our international journal",
      editorInChief: "Editor-in-Chief",
      editorialTeam: "Editorial Team",
      founders: "Founders",
      contactOffice: "Contact Editorial Office",
      address: "Address",
      email: "Email",
      phone: "Phone",
      officeHours: "Office Hours",
      importantDates: "Important Dates",
      submissionDeadline: "Submission Deadline:",
      publicationDate: "Publication Date:",
      monthDay15: "15th of each month",
      monthDay25: "25th of each month",
    },
  }

  const t = content[language]

  return (
    <main className="bg-background">
      <section className="border-b bg-gradient-to-br from-[#1a2332] via-[#2a3d5c] to-[#1a2332] py-16 text-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t.title}</h1>
          <p className="max-w-2xl text-lg text-blue-200">{t.subtitle}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">{t.editorInChief}</h2>
            <Card className="mx-auto max-w-3xl">
              <CardHeader className="text-center">
                <div className="mb-6 flex justify-center">
                  <Avatar className="h-32 w-32">
                    <AvatarFallback className="bg-[#1a2332] text-3xl font-bold text-white">DM</AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="mb-2 text-2xl font-bold text-foreground">{editorInChief.name}</h3>
                <div className="mb-4 space-y-1">
                  <p className="text-sm text-muted-foreground">{editorInChief.nameUz}</p>
                  <p className="text-sm text-muted-foreground">{editorInChief.nameRu}</p>
                </div>
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-[#1a2332] px-4 py-1 text-sm font-medium text-white">
                    {editorInChief.title}
                  </span>
                </div>
                <p className="text-base text-muted-foreground">{editorInChief.degree}</p>
                <p className="text-sm text-muted-foreground">{editorInChief.degreeRu}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">{t.editorialTeam}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {editorialTeam.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <Avatar className="h-20 w-20">
                        <AvatarFallback className="bg-[#1a2332] text-xl font-bold text-white">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="mb-2 text-xl font-bold text-foreground">{member.name}</h3>
                    <div className="mb-3 space-y-1">
                      <p className="text-sm font-medium text-[#1a2332]">{member.position}</p>
                      <p className="text-xs text-muted-foreground">{member.positionRu}</p>
                      <p className="text-xs text-muted-foreground">{member.positionUz}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.degree}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold">{t.founders}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {founders.map((founder, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                        <Users className="h-8 w-8" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{founder.name}</h3>
                    <p className="mb-1 text-sm text-muted-foreground">{founder.nameEn || founder.nameRu}</p>
                    {founder.nameRu && founder.nameEn && (
                      <p className="mb-3 text-sm text-muted-foreground">{founder.nameRu}</p>
                    )}
                    <span className="inline-block rounded-full border border-[#1a2332] px-3 py-1 text-xs font-medium text-[#1a2332]">
                      {founder.type}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-center text-3xl font-bold">{t.contactOffice}</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-foreground">{t.address}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          Jasorat mahalla, Hislat street, Building 7, Apartment 30
                          <br />
                          Mirzo-Ulugbek district
                          <br />
                          Tashkent, Uzbekistan
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-foreground">{t.email}</h3>
                        <a href="mailto:info@psrjournal.com" className="text-sm text-[#1a2332] hover:underline">
                          info@psrjournal.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1a2332] text-white">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-foreground">{t.phone}</h3>
                        <p className="text-sm text-muted-foreground">+998 XX XXX XX XX</p>
                      </div>
                    </div>

                    <div className="rounded-lg bg-muted p-4">
                      <h3 className="mb-2 font-semibold text-foreground">{t.officeHours}</h3>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (GMT+5)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg border bg-blue-50 p-6 text-center">
                  <h3 className="mb-2 font-semibold text-foreground">{t.importantDates}</h3>
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <div>
                      <span className="font-medium text-[#1a2332]">{t.submissionDeadline}</span>
                      <span className="ml-2 text-muted-foreground">{t.monthDay15}</span>
                    </div>
                    <div>
                      <span className="font-medium text-[#1a2332]">{t.publicationDate}</span>
                      <span className="ml-2 text-muted-foreground">{t.monthDay25}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

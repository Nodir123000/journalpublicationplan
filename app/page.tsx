import { Suspense } from "react"
import { Hero } from "@/components/hero"
import { AboutJournal } from "@/components/about-journal"
import { KeyDates } from "@/components/key-dates"
import { LatestIssues } from "@/components/latest-issues"
import { Features } from "@/components/features"
import { StatsSection } from "@/components/stats-section"
import { PublicationTimeline } from "@/components/publication-timeline"
import { TrustIndicators } from "@/components/trust-indicators"
import { DeadlineProgress } from "@/components/deadline-progress"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutJournal />
      <StatsSection />
      <Features />
      <PublicationTimeline />
      <TrustIndicators />
      <div className="container py-8">
        <DeadlineProgress />
      </div>
      <KeyDates />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestIssues />
      </Suspense>
    </main>
  )
}

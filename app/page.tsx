import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { LevelLadder } from "@/components/level-ladder"
import { ChoosePath } from "@/components/choose-path"
import { Features } from "@/components/features"
import { Community } from "@/components/community"
import { StudentRoute } from "@/components/student-route"
import { CtaFooter } from "@/components/cta-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <LevelLadder />
        <ChoosePath />
        <Features />
        <Community />
        <StudentRoute />
        <CtaFooter />
      </main>
    </>
  )
}

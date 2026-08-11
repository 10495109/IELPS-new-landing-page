import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ImageBand } from "@/components/image-band"
import { Features } from "@/components/features"
import { ChoosePath } from "@/components/choose-path"
import { Community } from "@/components/community"
import { StudentRoute } from "@/components/student-route"
import { CtaFooter } from "@/components/cta-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ImageBand />
        <Features />
        <ChoosePath />
        <Community />
        <StudentRoute />
        <CtaFooter />
      </main>
    </>
  )
}

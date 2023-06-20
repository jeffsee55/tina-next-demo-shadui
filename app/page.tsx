import { client } from "@/tina/__generated__/client"

import { FeaturedReading } from "@/components/blog-list"
import { FeatureList } from "@/components/features"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { WelcomeHero } from "@/components/welcome-hero"

export default async function Page() {
  const result = await client.queries.page({ relativePath: "home.md" })

  return (
    <>
      <SiteHeader />
      <WelcomeHero />
      <FeatureList />
      <FeaturedReading />
      <Footer />
    </>
  )
}

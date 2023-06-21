"use client"

import { Exact, PageAndNavQuery, PageQuery } from "@/tina/__generated__/types"
import { Json } from "tinacms/dist/dev-tools"
import { tinaField, useTina } from "tinacms/dist/react"

import { FeaturedReading } from "@/components/blog-list"
import { FeatureList } from "@/components/features"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { WelcomeHero } from "@/components/welcome-hero"

export function ClientPage(props: {
  data: PageAndNavQuery
  variables: Exact<{
    relativePath: string
  }>
  query: string
}) {
  const result = useTina(props)

  return (
    <>
      <SiteHeader {...result.data.global} />
      {result.data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageBlocksWelcomeHero": {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <WelcomeHero {...block} />
              </div>
            )
          }
          case "PageBlocksFeatureList": {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <FeatureList {...block} />
              </div>
            )
          }
          case "PageBlocksFeaturedReading": {
            return <FeaturedReading {...block} />
          }
        }
      })}
      <Footer {...result.data.global} />
    </>
  )
}

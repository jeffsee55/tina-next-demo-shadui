"use client"

import { PostConnectionQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import { BlogList } from "@/components/blog-list"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export function ClientBlogIndexPage(props: {
  data: PostConnectionQuery
  variables: {}
  query: string
}) {
  const result = useTina(props)
  return (
    <>
      <SiteHeader />
      <div className="bg-muted">
        <div className="container flex flex-col gap-8 py-8">
          <BlogList {...result.data.postConnection} />
        </div>
      </div>
      <Footer />
    </>
  )
}

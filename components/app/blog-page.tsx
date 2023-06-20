"use client"

import Image from "next/image"
import { Exact, PostQuery } from "@/tina/__generated__/types"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { FeaturedReadingAlt } from "@/components/blog-list"
import { Body } from "@/components/blog-post"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export function ClientBlogPage(props: {
  data: PostQuery
  variables: Exact<{
    relativePath: string
  }>
  query: string
}) {
  const result = useTina(props)
  result.data.post
  return (
    <>
      <SiteHeader />
      <div className="relative bg-muted">
        <div className="container relative z-10 flex flex-col py-8">
          <FeaturedReadingAlt {...result.data.post} />
        </div>
        <div className="absolute -inset-24 blur-lg">
          <Image
            fill={true}
            className="object-cover"
            alt=""
            src={result.data.post.image || ""}
          />
        </div>
      </div>
      <div className="relative bg-muted py-8 lg:py-24">
        <div className="mx-auto max-w-5xl px-8">
          <div
            className="prose max-w-none dark:prose-invert"
            data-tina-field={tinaField(result.data.post, "body")}
          >
            <TinaMarkdown content={result.data.post.body} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

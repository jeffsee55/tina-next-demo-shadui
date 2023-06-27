import client from "@/tina/__generated__/client"

import { ClientBlogPage } from "@/components/app/blog-page"

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const result = await client.queries.postAndNav({
    relativePath: `${params.slug}.md`,
  })

  return <ClientBlogPage {...result} />
}

import client from "@/tina/__generated__/client"

import { ClientBlogIndexPage } from "@/components/app/blog-list-page"

export default async function BlogIndexPage() {
  const result = await client.queries.postConnectionAndNav()

  return <ClientBlogIndexPage {...result} />
}

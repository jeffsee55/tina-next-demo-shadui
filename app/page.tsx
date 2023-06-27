import { client } from "@/tina/__generated__/client"

import { ClientPage } from "@/components/app/page"

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function Page() {
  const result = await client.queries.pageAndNav({ relativePath: "home.md" })

  return <ClientPage {...result} />
}

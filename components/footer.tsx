import React from "react"
import { PageAndNavQuery } from "@/tina/__generated__/types"

import { SecondaryMenu } from "@/components/site-header"

export function Footer(props: PageAndNavQuery["global"]) {
  const year = React.useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-4 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:justify-start">
          <SecondaryMenu items={props.social} />
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-primary">
            &copy; {year} LlamaLink, Inc
          </p>
        </div>
      </div>
    </footer>
  )
}

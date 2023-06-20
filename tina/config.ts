import { defineConfig } from "tinacms"

export default defineConfig({
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  schema: {
    collections: [
      {
        label: "Page",
        name: "page",
        path: "content/pages",
        fields: [{ name: "title", label: "Title", type: "string" }],
      },
    ],
  },
  // These values will be used by Tina Cloud when we're ready to deploy to our host
  branch: "",
  clientId: "",
  token: "",
})

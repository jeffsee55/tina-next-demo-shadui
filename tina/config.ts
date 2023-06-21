import { defineConfig } from "tinacms"

import { FeaturedIcons } from "../components/icons"

export default defineConfig({
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Page",
        name: "page",
        format: "md",
        ui: {
          router: (args) => {
            if (args.document._sys.relativePath === "home.md") {
              return "/"
            }
          },
        },
        path: "content/pages",
        fields: [
          { name: "title", label: "Title", type: "string" },
          {
            type: "object",
            name: "blocks",
            list: true,
            templates: [
              {
                name: "welcomeHero",
                label: "Welcome Hero",
                fields: [
                  {
                    name: "message",
                    label: "Message",
                    type: "rich-text",
                  },
                  {
                    name: "links",
                    label: "Links",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "link", type: "string", label: "Link" },
                      { name: "label", label: "Label", type: "string" },
                      {
                        type: "string",
                        name: "style",
                        label: "Style",
                        options: ["button", "simple"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "featureList",
                label: "Feature Lists",
                fields: [
                  {
                    name: "label",
                    label: "Label",
                    type: "string",
                  },
                  {
                    name: "message",
                    label: "Message",
                    type: "rich-text",
                  },
                  {
                    name: "features",
                    label: "Features",
                    type: "object",
                    list: true,
                    ui: {
                      defaultItem: {
                        icon: Object.keys(FeaturedIcons)[10],
                        label: "Welcome to LlamaLink",
                        description: `Our user-friendly app provides a seamless experience across devices, allowing you to connect with others effortlessly. Available on desktop, mobile, and tablet, LlamaLink keeps you connected anytime, anywhere.`,
                      },
                      itemProps: (item) => {
                        return { label: item?.label }
                      },
                    },
                    fields: [
                      {
                        name: "icon",
                        type: "string",
                        label: "Icon",
                        options: Object.keys(FeaturedIcons),
                      },
                      { name: "label", label: "Label", type: "string" },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Post",
        name: "post",
        format: "md",
        ui: {
          router: (args) => {
            return `/blog/${args.document._sys.breadcrumbs.join("/")}`
          },
        },
        path: "content/posts",
        fields: [
          { name: "title", label: "Title", type: "string" },
          {
            name: "author",
            label: "Author",
            type: "reference",
            collections: ["author"],
          },
          { name: "image", label: "Image", type: "image" },
          { name: "description", label: "Description", type: "string" },
          { name: "body", label: "Body", type: "rich-text", isBody: true },
        ],
      },
      {
        label: "Author",
        name: "author",
        format: "md",
        path: "content/authors",
        fields: [
          { name: "name", label: "Name", type: "string" },
          { name: "imageUrl", label: "Image URL", type: "image" },
        ],
      },
      {
        label: "Global",
        name: "global",
        format: "md",
        path: "content/global",
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            name: "links",
            label: "Links",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label }
              },
            },
            fields: [
              {
                name: "label",
                label: "Label",
                type: "string",
              },
              {
                name: "link",
                label: "Link",
                type: "string",
              },
            ],
          },
          {
            name: "social",
            label: "Social",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.platform }
              },
            },
            fields: [
              {
                name: "platform",
                label: "Platform",
                type: "string",
                options: ["twitter", "github"],
              },
              {
                name: "handle",
                label: "Handle",
                type: "string",
              },
            ],
          },
        ],
      },
    ],
  },
  // These values will be used by Tina Cloud when we're ready to deploy to our host
  branch: "",
  clientId: "",
  token: "",
})

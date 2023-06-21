// graphql.config.js
module.exports = {
  projects: {
    app: {
      schema: ["tina/__generated__/schema.gql"],
      // documents: ["tina/**/*.gql"],
      documents: [
        "tina/__generated__/frags.gql",
        "tina/__generated__/queries.gql",
        "tina/queries/custom.gql",
      ],
    },
  },
}

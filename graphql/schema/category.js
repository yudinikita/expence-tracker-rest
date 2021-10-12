module.exports = `
  type Category {
    _id: ID!
    title: String!
    user: ID!
  }

  input CategoryInput {
    title: String!
  }
`

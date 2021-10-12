module.exports = `
  type Transaction {
    _id: ID!
    user: ID!
    amount: Int!
    category: Category!
    commentary: String
    createdAt: String
    updatedAt: String
  }

  input TransactionInput {
    amount: Int!
    category: ID!
    commentary: String
    createdAt: String
    updatedAt: String
  }
`

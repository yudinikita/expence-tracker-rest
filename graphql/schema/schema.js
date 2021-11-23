const { buildSchema } = require('graphql')

const transaction = require('./transaction')
const category = require('./category')
const balance = require('./balance')
const analytics = require('./analytics')
const user = require('./user')

const mainSchema = `
  type Query {
    getTransactions: [Transaction!]!
    getTransactionDetail(transactionId: ID): Transaction!
    
    getCategories: [Category!]!
    
    getBalance: Balance!
    getBalancePerDate(startDate: String, endDate: String): Balance!
    
    getAnalyticsBalance(startDate: String, endDate: String): AnalyticsBalance!
    getAnalyticsAverage(startDate: String, endDate: String): AnalyticsBalance!
    getAnalyticsExpense(startDate: String, endDate: String): [AnalyticsCategory!]!
    getAnalyticsIncome(startDate: String, endDate: String): [AnalyticsCategory!]!
  }

  type Mutation {
    registration(userInput: UserRegistrationInput): User!
    activate(activationLink: ID): Boolean!
    login(userInput: UserLoginInput): User!
    logout: Boolean!
    refresh: User!
  
    createTransaction(transaction: TransactionInput): Transaction!
    updateTransaction(id: ID, transaction: TransactionInput): Transaction!
    deleteTransaction(id: ID): Boolean!
    
    createCategory(category: CategoryInput): Category!
    updateCategory(id: ID, category: CategoryInput): Category!
    deleteCategory(id: ID): Boolean
    deleteCategoryReplace(id: ID, newId: ID): Boolean
    deleteCategoryWithTransactions(id: ID): Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

const schemes = [
  transaction,
  category,
  balance,
  analytics,
  user,
  mainSchema
]

const connectedSchemes = schemes.join(' ')

module.exports = buildSchema(connectedSchemes)

module.exports = `
  type AnalyticsBalance {
    income: Int!
    expense: Int!
    remainder: Int!
  }
  
  type AnalyticsCategory {
    category: Category!
    amount: Int!
  }
`

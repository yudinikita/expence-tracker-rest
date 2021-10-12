module.exports = `
  type User {
    id: ID!
    email: String
    isActivated: Boolean!
    accessToken: String!
    refreshToken: String!
  }
  
  input UserLoginInput {
    email: String
    password: String
  }
  
  input UserRegistrationInput {
    email: String
    password: String
    repeatPassword: String
  }
`

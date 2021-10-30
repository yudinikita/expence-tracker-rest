import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($userInput: UserLoginInput) {
    login(userInput: $userInput) {
      id
      email
      isActivated
      accessToken
      refreshToken
    }
  }
`

export const REGISTRATION_USER = gql`
  mutation register($userInput: UserRegistrationInput) {
    registration(userInput: $userInput) {
      id
      email
      isActivated
      accessToken
      refreshToken
    }
  }
`

export const REFRESH = gql`
  mutation refresh {
    refresh {
      id
      email
      isActivated
      accessToken
      refreshToken
    }
  }
`

export const ACTIVATE_USER = gql`
  mutation refresh {
    refresh {
      id
      email
      isActivated
      accessToken
      refreshToken
    }
  }
`

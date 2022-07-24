// import { type } from '@testing-library/user-event/dist/types/utility'

export const username = (username) => {
  return 
    type: 'username',
    username,
}

export const password = (password) => {
  return 
    type: 'password',
    password,
}

export const login = () => {
  return 
    type: 'Login',
}

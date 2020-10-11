import React from 'react'
import LoginForm from './LoginForm'
import JtockAuth from "j-tockauth"

const Authentication = () => {
  const login = async (e) => {
    e.preventDefault()
    // e.target.email.value
  }


  return (
    <>
      <LoginForm
        login={login}
      />
      
    </>
  )
}

export default Authentication

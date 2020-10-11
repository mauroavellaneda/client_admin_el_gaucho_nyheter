import React, { useState } from 'react'
import Authentication from './components/Authentication'
import MyPage from './components/MyPage'

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)


  return (
    <>
    { authenticated ? (
       <MyPage />
    ) : (
      <Authentication />
    )}
    </>
  )
}

export default App

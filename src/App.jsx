import React, { useState } from 'react'
import Authentication from './components/Authentication'
import MyPage from './components/MyPage'
import Header from './components/Header'


const App = () => {
  const [authenticated, setAuthenticated] = useState(false)


  return (
    <>
    <Header />
    { authenticated ? (
       <MyPage />
    ) : (
      <Authentication 
        authenticate={(success) => setAuthenticated(success)}
      />
    )}
    </>
  )
}

export default App

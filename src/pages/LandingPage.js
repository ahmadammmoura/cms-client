import React from 'react'
// import SignIn from '../components/auth/SignUp'
import Contact from '../components/NavBar/Contact'
import NavBar from '../components/NavBar/NavBar'
import cover from '../assets/cover.png'
import style from './style/landingPage.module.css'
import LogInContainer from '../components/auth'
function LandingPage() {
  return (
    <>
        <Contact/>
        <NavBar/>
      <div className={style.container}>
        <div className={style.cover}>
          <img src={cover} alt="cover" />
        </div>
        <div>
        <LogInContainer/>
        </div>
      </div>
    
    </>
  )
}

export default LandingPage
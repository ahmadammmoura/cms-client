import React from 'react'
import style from './style/Contact.module.css'
function Contact() {
  return (
    <div className={style.contact}>
        <div>
            <i class="fa-solid fa-phone"></i>
            <p>+962796670230</p>
        </div>
        <div>
            <i class="fa-solid fa-location-dot"></i>
            <p>Jordan,Amman, mecca street</p>
        </div>
    </div>
  )
}

export default Contact
import { NextPage } from 'next'
import { useState } from 'react'
import styles from '@/styles/HamburgerMenu.module.scss'

const HamburgerMenu: NextPage = () => {
  const [toggleBtn, setToggleBtn] = useState(false)
  return (
    <div className={`${styles.hamburger} ${toggleBtn ? styles.open : ''}`}>
      <nav>
        <div className={styles.hamburger_nav}>
          <ul>
            <li>
              <a href="#">WORK</a>
            </li>
            <li>
              <a href="#">MEMBER</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={styles.hamburger_btn}
        onClick={() => setToggleBtn(!toggleBtn)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default HamburgerMenu

import React from 'react'
import styles from './Header.module.css'
import Navigation from '../../components/Navigation/Navigation'

function Header() {
  return (
    <div className={styles.header}><Navigation/></div>
  )
}

export default Header
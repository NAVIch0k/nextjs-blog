import React from 'react'
import s from './Header.module.scss'

const Header=()=>{
  return (
    <div className={s.header}>
        <h1 className={s.header__title}>Музыкальная площадка</h1>
    </div>
  )
}

export default Header

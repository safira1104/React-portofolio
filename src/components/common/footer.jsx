import React from 'react'
import { social } from './data/dummydata'

export const Footer = () => {
  return (
    <>
        <footer data-aos='zoom-in-left'>
            {social.map((item)=> (
                <i>{item.icon}</i>
            ))}
            <p data-aos='zoom-in-right'>All Right Reserved 2025 </p>
        </footer>
    </>
  )
}

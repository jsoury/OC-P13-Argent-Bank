import React from 'react'
import style from './hero.module.scss'

const Hero = () => {
  return (
    <div className={style.hero}>
      <section className={style.hero__content}>
        <h2 className="sr-only">Promoted Content</h2>
        <p className={style.hero__content__subtitle}>No fees.</p>
        <p className={style.hero__content__subtitle}>No minimum deposit.</p>
        <p className={style.hero__content__subtitle}>High interest rates.</p>
        <p className={style.hero__content__subtitle}></p>
        <p className={style.hero__content__text}>Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  )
}

export default Hero

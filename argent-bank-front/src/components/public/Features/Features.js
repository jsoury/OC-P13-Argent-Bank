import React from 'react'
import style from './features.module.scss'
import iconChat from '@/assets/images/icon-chat.png'
import iconMoney from '@/assets/images/icon-money.png'
import security from '@/assets/images/icon-security.png'

const Features = () => {
  return (
    <section className={style.features}>
      <h2 className="sr-only">Features</h2>
      <div className={style.feature__item}>
        <img src={iconChat} alt="Chat Icon" className={style.feature__icon} />
        <h3 className={style.feature__item__title}>You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our 24/7 chat or through a
          phone call in less than 5 minutes.
        </p>
      </div>
      <div className={style.feature__item}>
        <img src={iconMoney} alt="Money Icon" className={style.feature__icon} />
        <h3 className={style.feature__item__title}>More savings means higher rates</h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      <div className={style.feature__item}>
        <img src={security} alt="Security Icon" className={style.feature__icon} />
        <h3 className={style.feature__item__title}>Security you can trust</h3>
        <p>We use top of the line encryption to make sure your data and money is always safe.</p>
      </div>
    </section>
  )
}

export default Features

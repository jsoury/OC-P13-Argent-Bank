import React from 'react'
import styles from './cardAccount.module.scss'

const CardAccount = ({ title, amount, description }) => {
  return (
    <section className={styles.account}>
      <div className={styles.account__contentWrapper}>
        <h3 className={styles.account__title}>{title}</h3>
        <p className={styles.account__amount}>{amount}</p>
        <p className={styles.account__description}>{description}</p>
      </div>
      <div className={`${styles.account__contentWrapper} ${styles.cta}`}>
        <button className={styles.transaction__button}>View transactions</button>
      </div>
    </section>
  )
}

export default CardAccount

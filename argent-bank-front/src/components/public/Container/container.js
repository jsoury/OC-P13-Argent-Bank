import styles from './container.module.scss'

/**
 * Encloses children in a responsive container'.
 *
 * @component
 */
export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>
}

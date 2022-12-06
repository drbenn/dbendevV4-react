import styles from './nav.module.scss'

export default function Nav() {

  return(
    <div className={styles.navcontainer}>
      <ul>
        <ol>ABOUT</ol>
        <ol>FEATURED</ol>
        <ol>PAST PROJECT</ol>
        <ol>CONTACT</ol>
      </ul>
    </div>
  )
}
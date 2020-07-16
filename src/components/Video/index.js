import styles from './Video.module.css'

export default function Video() {
  return (
    <video className={styles.bgVideo} autoPlay muted loop id="myVideo">
      <source src="/background.webm" type="video/webm" />
    </video>
  )
}

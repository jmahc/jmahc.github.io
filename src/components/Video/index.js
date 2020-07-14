import styles from './Video.module.css'

export default function Video() {
  return (
    <video className={styles.bgVideo} autoPlay muted loop id="myVideo">
      <source src="/background-lower_res.mp4" type="video/mp4" />
    </video>
  )
}

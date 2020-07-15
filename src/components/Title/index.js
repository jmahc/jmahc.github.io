import styles from './Title.module.css'

export default function Title({ text }) {
  return (
    <div className={`mx-auto ${styles.flexBasis} p-4`}>
      <h1 className="title">{text}</h1>
    </div>
  )
}

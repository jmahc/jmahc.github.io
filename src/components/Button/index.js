// import styles from './Button.module.css'

export default function Button({ color }) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object. {styles.error}
      className={`btn btn-${color} flex-row`}>
      Destroy
    </button>
  )
}

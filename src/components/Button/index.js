// import styles from './Button.module.css'

/**
 * A random button for the home page.
 * @param {Object} props - Button component props.
 * @param {type} props.color - The color for the button that can be either 'blue' or 'gray'.
 */
export default function Button({ color = 'blue' }) {
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

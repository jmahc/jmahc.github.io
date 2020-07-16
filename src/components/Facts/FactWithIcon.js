/**
 * A fact that has an icon associated with it.
 * @param {Object} props - The FactWithIcon props object.
 * @param {String} props.icon - The font-awesome icon name.
 * @param {String} props.text - The text for the fact.
 * @param {Boolean} props.isLocation - Whether or not the fact is the location, defaulted to false.
 */
export function FactWithIcon({ icon, text, isLocation = false }) {
  let containerClasses = isLocation
    ? 'text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase'
    : 'mb-2 text-gray-700'

  // Adds margin to the top, since the employer is the first "Fact"
  if (icon === 'briefcase') containerClasses += ' mt-10'

  return (
    <div className={containerClasses}>
      <i className={`fas fa-${icon} mr-2 text-lg text-gray-500`}></i>
      {` ${text}`}
    </div>
  )
}

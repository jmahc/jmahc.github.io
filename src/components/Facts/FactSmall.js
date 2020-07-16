/**
 *
 * @param {Object} props - The component props.
 * @param {type} props.info - The fact information (larger text).
 * @param {type} props.title - The fact title/identifier (smaller text).
 */
export function FactSmall({ info, title }) {
  return (
    <div className="mr-4 p-3 text-center">
      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
        {info}
      </span>
      <span className="text-sm text-gray-500">{title}</span>
    </div>
  )
}

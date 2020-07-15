/**
 * Main title for the home page.
 * @param {Object} props - Title component props.
 * @param {type} props.text - The text for the title.
 */
export default function Title({ text = 'Default Text' }) {
  return (
    <div className="mx-auto w-full p-4">
      <h1 className="title">{text}</h1>
    </div>
  )
}

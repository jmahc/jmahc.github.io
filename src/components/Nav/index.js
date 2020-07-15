import Link from 'next/link'

const links = [
  { href: 'https://github.com/jmahc', label: 'GitHub' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
]

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex justify-between items-center p-8">
          <li>
            <Link href="/">
              <a className="text-blue-500 no-underline">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-blue-500 no-underline">About</a>
            </Link>
          </li>
          <ul className="flex justify-between items-center space-x-4">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <a href={href} className="btn btn-blue no-underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </header>
  )
}

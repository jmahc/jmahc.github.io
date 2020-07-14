import Link from 'next/link'

import Button from '../components/Button'

export default function Home() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
      <Button />
      <img src="/500.png" alt="500x500 image" className="main-photo" />
    </div>
  )
}

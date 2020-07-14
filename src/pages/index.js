import Button from '@/components/Button'
import Title from '@/components/Title'

export default function Home() {
  return (
    <div className="flex flex-row justify-center content-center flex-wrap">
      <Title text="Hello, world!" />
      <div className="">
        <Button color="gray" />
      </div>
      {/*
      <img src="/500.png" alt="500x500 image" className="main-photo" />
      */}
    </div>
  )
}

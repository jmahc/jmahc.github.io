import Button from '@/components/Button'
import Title from '@/components/Title'

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center content-center flex-wrap">
      <Title text="Hello, world!" />
      <div className="mx-auto w-full p-4 text-center">
        <Button color="gray" />
      </div>
      <div className="mx-auto p-4 text-center">
        <img src="/media/500.png" alt="500x500 image" className="text-center" />
      </div>
      <div className="mx-auto p-4 text-center">
        <img
          src="/media/profile-picture.jpg"
          alt="500x500 image"
          className="text-center"
        />
      </div>
    </div>
  )
}

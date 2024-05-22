import Image from "next/image";

export default function Description({title, description, imageSrc, imageAlt}) {
  return (
    <div className="m-8 h-auto lg:grid lg:grid-cols-2 lg:gap-14">
      <div className="text-center m-6">
        <h1 className="text-5xl m-6">{title}</h1>
        <p className="text-xl">{description}</p>
      </div>
      <div className="grid grid-rows-2 gap-8">
        <div className="relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  )
}

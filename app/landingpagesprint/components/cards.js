import Image from 'next/image'

export function StepCard({header='Default Header', text='default text', img}) {
  return (
    <div className="border border-gray-200 p-4 shadow-lg w-60 mb-5">
      <div className="h-32 relative mb-4">
        <Image
          src={img}
          fill={true}
          alt={header}
          className="object-contain text-center"
        />
      </div>
      <h3 className="text-center font-bold text-base mb-4">{header}</h3>
      <p className="text-center text-gray-500 mb-4">{text}</p>
    </div>
  )
}

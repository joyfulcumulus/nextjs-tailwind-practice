import Image from 'next/image'

export function FoodCard() {
  const backgroundImage = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")`
  }

  return (
    <div
      style={backgroundImage}
      className="h-44 w-[500px] bg-cover bg-center text-white font-semibold text-3xl drop-shadow-[1px_1px_3px_rgba(0,0,0,0.2)] shadow-xl rounded-md flex justify-center items-center"
    >
      Breakfast
    </div>
  )
}

export function ProductCard() {
  return (
    <div className="flex w-[500px] rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.3)]">
      <div className="w-32 h-32 relative">
      <Image
        src="https://images.unsplash.com/photo-1531565637446-32307b194362?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2452&q=80"
        fill={true}
        alt="Product image"
        className="object-cover"
      />
      </div>
      <div className="grow flex flex-col justify-center">
        <div className="p-4">
          <h1 className="text-base font-bold">Product Name</h1>
          <p className="text-xs opacity-70">Product description with <strong>relevant info</strong> only.</p>
        </div>
      </div>
    </div>
  )
}

export function TripCard() {
  return (
    <div>
      TripCard
    </div>
  )
}

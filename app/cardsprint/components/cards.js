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
    <div>
      ProductCard
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

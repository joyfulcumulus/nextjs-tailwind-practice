import Link from 'next/link'
import { FoodCard, ProductCard, TripCard } from './components/cards'

export default function Page() {
  return (
    <div className="m-10">
      <h1 className="text-4xl mb-5">Card Sprint</h1>
      <p className="text-xl"><Link href="/" className="text-blue-800 hover:text-blue-300">Back to Home</Link></p>
      <p className="text-l my-4">Food Card</p>
      <FoodCard />
      <p className="text-l my-4">Product Card</p>
      <ProductCard />
      <p className="text-l my-4">Trip Card</p>
      <TripCard />
    </div>
  )
}

import Link from 'next/link'
import { FoodCard, ProductCard, TripCard } from './components/cards'

export const metadata = {
  title: 'Card Sprint',
}

export default function Page() {
  return (
    <div className="m-10">
      <h1 className="text-4xl mb-5">Card Sprint</h1>
      <p className="text-xl">
        <Link href="/" className="text-blue-800 hover:text-blue-300 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor"
              className="size-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            <span>Back to Home</span>
          </Link>
      </p>
      <p className="text-l my-4">Food Card</p>
      <FoodCard />
      <p className="text-l my-4">Product Card</p>
      <ProductCard />
      <p className="text-l my-4">Trip Card</p>
      <TripCard />
    </div>
  )
}

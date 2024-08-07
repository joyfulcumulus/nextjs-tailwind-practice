import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Card({ title="Item title", desc="A product description", rating=3.4, price=65}) {
  const formattedRating = rating.toFixed(1);

  return (
    <div className="bg-white p-4 shadow hover:scale-110 transition cursor-pointer">
      <div className="h-32 relative">
        <Image
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill={true}
          alt="Product image"
          className="object-cover"
        />
      </div>

      <div className="flex justify-between pt-5 pb-7">
        <div>
          <p className="text-base font-semibold text-slate-800">{title}</p>
          <p className="text-xs text-gray-400 my-1">{desc}</p>
          <p className="text-xs text-gray-400">
            {
              [...Array(5)].map((_, i) =>
                <FontAwesomeIcon icon={faStar} key={i + 1} className={i + 1 <= rating ? "text-yellow-400" : "text-gray-200"}/>
              )
            }
            ({formattedRating})
          </p>
        </div>
        <div className="text-base font-semibold text-blue-400">
          ${price}
        </div>
      </div>

      <div className="text-center text-xs font-semibold text-gray-400 border-t border-slate-200 py-3">
        <Link href="#" className="inline-block">Add to Cart</Link>
      </div>
    </div>
  )
}

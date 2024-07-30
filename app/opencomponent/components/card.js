import Link from "next/link"
import Image from "next/image"

export default function Card() {
  return (
    <div className="bg-white p-4">
      <div className="h-32 relative">
        <Image
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill={true}
          alt="Product image"
          className="object-cover"
        />
      </div>

      <div className="flex justify-between">
        <div>
          <p>title</p>
          <p>desc</p>
          <p>rating</p>
        </div>
        <div>
          $price
        </div>
      </div>

      <div className="text-center">
        <Link href="#">Add to Cart</Link>
      </div>
    </div>
  )
}

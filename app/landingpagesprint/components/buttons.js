import Link from 'next/link';

export function GreenButton() {
  return (
    <Link
      href="#"
      className="px-6 py-3 rounded-full inline-block bg-green-400 text-lg text-white"
    >
      <span>Apply now!</span>
    </Link>
  )
}

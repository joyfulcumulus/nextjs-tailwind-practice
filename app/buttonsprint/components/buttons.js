import Link from 'next/link';

export function WhiteButton() {
  return (
    <Link
      href="#"
      className="px-4 py-3 border border-solid border-slate-300 rounded-full bg-white text-lg text-slate-300 font-light transition-colors hover:border-slate-500 hover:text-slate-500"
    >
      <span>Write a story</span>
    </Link>
  )
}

export function GreenButton() {
  return (
    <Link
      href="#"
      className="px-4 py-3 rounded-lg bg-green-400 text-lg text-white font-semibold transition-colors hover:bg-green-500"
    >
      <span>Start now</span>
    </Link>
  )
}

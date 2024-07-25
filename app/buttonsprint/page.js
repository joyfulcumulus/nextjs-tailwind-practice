import Link from 'next/link'
import { WhiteButton, GreenButton } from '@/app/buttonsprint/components/buttons'

export default function Page() {
  return (
    <div className="m-10">
      <h1 className="text-4xl mb-5">Button Sprint</h1>
      <p className="text-xl mb-4"><Link href="/" className="text-blue-800 hover:text-blue-300">Back to Home</Link></p>
      <p className="text-l my-4">Button 1</p>
      <WhiteButton />
      <p className="text-l my-4">Button 2</p>
      <GreenButton />
    </div>
  )
}

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export function Footer() {
  return (
    <div className="text-center p-16 bg-stone-900">
      <div>
        <Link href="#" className="">
          <span>icon</span>
        </Link>
        <p className="text-stone-400 text-base">This website was coded with <FontAwesomeIcon icon={faHeart} /> at Le Wagon.</p>
      </div>
    </div>
  )
}

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  return (
    <div className="text-center p-16 bg-stone-900">
      <div>
        <Link href="#" className="text-green-400 px-3 text-4xl">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link href="#" className="text-green-400 px-3 text-4xl">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="#" className="text-green-400 px-3 text-4xl">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link href="#" className="text-green-400 px-3 text-4xl">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <p className="text-stone-400 text-base my-3">This website was coded with <FontAwesomeIcon icon={faHeart} /> at Le Wagon.</p>
      </div>
    </div>
  )
}

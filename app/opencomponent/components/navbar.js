import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faComment, faCircleChevronDown} from '@fortawesome/free-solid-svg-icons'
import Search from './search'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar({ username="Alien John", role="Admin" }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md mb-2">
      <Search />

      <div className="flex items-center">
        <FontAwesomeIcon icon={faBell} className="inline-block px-4 text-xl" />
        <FontAwesomeIcon icon={faComment} className="inline-block px-4 text-xl"/>

        <div className="inline-block flex justify-between items-center px-4">
          <div className="flex justify-between items-center">
            <div className="pe-4">
              <Image
                src="https://images.unsplash.com/photo-1653820996410-ce8a8bd1cb01?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={40}
                height={40}
                alt="Language image"
              />
            </div>
            <p className="text-sm font-semibold text-gray-700">English</p>
          </div>
          <div className="ps-4">
            <Link href="#">
              <FontAwesomeIcon icon={faCircleChevronDown} />
            </Link>
          </div>
        </div>

        <div className="inline-block flex justify-between items-center border-l border-slate-200 ps-4 pe-6">
          <div className="flex justify-between">
            <div className="pe-4">
              <Image
                src="https://kitt.lewagon.com/placeholder/users/krokrob"
                width={40}
                height={40}
                alt="Avatar image"
                className="rounded-full shadow-md"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">{username}</p>
              <p className="text-xs text-gray-500">{role}</p>
            </div>
          </div>
          <div className="ps-4">
            <Link href="#">
              <FontAwesomeIcon icon={faCircleChevronDown} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

export default function SideNavButton({linkText='link text', icon=faCircleQuestion, isActive=false}) {
  return (
    <div className={isActive ? "bg-sky-100 border-l-4 border-blue-600 py-2 px-4" : "py-2 px-4"}>
      <Link
        href="#"
      >
        <FontAwesomeIcon icon={icon} className={isActive ? "pe-4 text-blue-600" : "pe-4 text-gray-600"} />
        <p className={isActive ? "inline-block text-sm font-medium text-blue-600" : "inline-block text-sm font-medium text-gray-600"}>{linkText}</p>
      </Link>
    </div>
  )
}

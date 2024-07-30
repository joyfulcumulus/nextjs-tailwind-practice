import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

export default function SideNavButton({linkText='link text', icon=faCircleQuestion}) {
  return (
    <div className="py-2 px-4">
      <Link
        href="#"
        className=""
      >
        <FontAwesomeIcon icon={icon} className="pe-4" />
        {linkText}
      </Link>
    </div>
  )
}

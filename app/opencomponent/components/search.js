import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  return (
    <div>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="inline-block text-gray-500 pe-3" />
      <form className="inline-block text-sm font-semibold text-gray-600">
        <input placeholder="Search Chat" className='outline-none'/>
      </form>
    </div>
  )
}

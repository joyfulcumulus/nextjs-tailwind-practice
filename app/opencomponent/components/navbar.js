import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell, faComment} from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  return (
    <div className="flex justify-between p-4 bg-white shadow-md mb-2">
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="inline-block" />
        <form className="inline-block">
          <input placeholder="Search Chat" />
        </form>
      </div>

      <div>
        <FontAwesomeIcon icon={faBell} className="inline-block" />
        <FontAwesomeIcon icon={faComment} className="inline-block"/>
        <p className="inline-block">Dropdown box</p>
        <p className="inline-block">User box</p>
      </div>
    </div>
  )
}

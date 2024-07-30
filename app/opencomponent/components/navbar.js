import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faComment} from '@fortawesome/free-solid-svg-icons'
import Search from './search'

export default function NavBar() {
  return (
    <div className="flex justify-between p-4 bg-white shadow-md mb-2">
      <Search />

      <div>
        <FontAwesomeIcon icon={faBell} className="inline-block" />
        <FontAwesomeIcon icon={faComment} className="inline-block"/>
        <p className="inline-block">Dropdown box</p>
        <p className="inline-block">User box</p>
      </div>
    </div>
  )
}

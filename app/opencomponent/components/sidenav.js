import BackButton from "./backbutton"
import SideNavButton from "./sidenavbutton"
import {
  faChartSimple,
  faMessage,
  faCalendar,
  faRectangleList,
  faStore,
  faHeart,
  faCreditCard,
  faFileLines,
  faUser,
  faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function SideNav() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="p-4">
        <BackButton />
      </div>

      <div>
        <SideNavButton linkText="Overview" icon={faChartSimple}/>
        <SideNavButton linkText="Chat" icon={faMessage}/>
        <SideNavButton linkText="Calendar" icon={faCalendar}/>
        <SideNavButton linkText="Todo List" icon={faRectangleList}/>
        <SideNavButton linkText="Products" icon={faStore}/>
        <SideNavButton linkText="Favourite Products" icon={faHeart}/>
        <SideNavButton linkText="Orders" icon={faCreditCard}/>
        <SideNavButton linkText="Invoice" icon={faFileLines}/>
        <SideNavButton linkText="Top Customers" icon={faUser}/>
        <SideNavButton linkText="UI Elements" />
      </div>

      <SideNavButton linkText="Log Out" icon={faArrowRightFromBracket}/>

    </div>
  )
}

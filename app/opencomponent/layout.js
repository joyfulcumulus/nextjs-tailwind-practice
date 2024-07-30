
import SideNav from "./components/sidenav";
import NavBar from "./components/navbar";

export default function Layout({ children }) {
  return (
    <div className="flex w-full h-screen bg-gray-50">
      <div className="">
        <SideNav />
      </div>
      <div className="grow flex flex-col">
        <NavBar />
        <div className="shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}

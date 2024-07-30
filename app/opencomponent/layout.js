
import SideNav from "./components/sidenav";
import NavBar from "./components/navbar";

export default function Layout({ children }) {
  return (
    <div className="flex w-screen h-screen">
      <div className="">
        <SideNav />
      </div>
      <div className="grow">
        <NavBar />
        <div className="">
          {children}
        </div>
      </div>
    </div>
  );
}


import SideNav from "./components/sidenav";
import NavBar from "./components/navbar";

export default function Layout({ children }) {
  return (
    <div className="flex w-screen h-screen">
      <div className="border border-black">
        <SideNav />
      </div>
      <div className="grow border border-black">
        <NavBar />
        <div className="">
          {children}
        </div>
      </div>
    </div>
  );
}

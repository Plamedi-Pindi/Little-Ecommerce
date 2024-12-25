// Router
import { Link, Outlet } from "react-router-dom"

// Components
import Menu from "../components/Sidebar/Menu"

export default function Layout({toggle, setToggle}) {
  return (
    <div className="bg-primary">
        <Menu toggle={toggle} setToggle={setToggle} />
        <Outlet />
    </div>
  )
}

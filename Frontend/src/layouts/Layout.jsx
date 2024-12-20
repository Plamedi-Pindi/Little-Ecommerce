// Router
import { Link, Outlet } from "react-router-dom"

// Components
import Menu from "../components/Sidebar/Menu"

export default function Layout({toggle}) {
  return (
    <div>
        <Menu toggle={toggle} />
        <Outlet />
    </div>
  )
}

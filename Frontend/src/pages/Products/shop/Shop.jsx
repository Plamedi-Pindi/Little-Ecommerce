// Components
import Header from "../../../layouts/components/Header"
export default function Shop({ toggleVisibility, toggle }) {
  return (
    <div className="w-full h-screen overflow-y-auto relative bg-primary overflow-hidden">
        <div className="w-full">
            <Header toggle={toggle} toggleVisibility={toggleVisibility} />
        </div>
    </div>
  )
}

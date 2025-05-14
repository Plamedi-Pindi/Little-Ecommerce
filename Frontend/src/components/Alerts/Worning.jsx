// Components
import { BsExclamationCircle } from "react-icons/bs"

export const Worning = ({message, state})=> {

    return(
        <div className={`w-[90%] m-auto h-16 text-white rounded-md bg-yellow-600 text-base flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-14 z-[100] ${state ? 'block' : 'hidden'} `}>
            <BsExclamationCircle className="text-3xl mr-2" />
            <p className=""> {message} </p>
        </div>
    )
}
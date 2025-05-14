
// Components
import { BsCheckCircleFill } from "react-icons/bs"

export const Success = ({message, state})=> {

    return(
        <div className={`w-[90%] m-auto h-16 text-white rounded-md bg-lime-700 text-base flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-14 z-[100] ${state ? 'block' : 'hidden'} `}>
            <BsCheckCircleFill className="text-3xl mr-2" />
            <p className=""> {message} </p>
        </div>
    )
}
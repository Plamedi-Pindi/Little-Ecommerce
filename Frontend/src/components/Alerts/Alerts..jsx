
export const Success = ({message, isDisplaying})=> {

    return(
        <div className={`w-full m-auto h-16 text-white rounded-lg bg-green-600 text-base flex items-center justify-center absolute top-10 ${isDisplaying ? '' : 'hidden'} `}>
            <p> {message} </p>
        </div>
    )
}
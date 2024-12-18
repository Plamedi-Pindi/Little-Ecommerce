// Components
import Card from "./Card"

export default function SmallCard({title, imgUrl}) {
  return (
    <div className='w-20 text-wrap text-xs text-zinc-700'>
        <Card boxSize={'w-16 h-16'} background={'bg-zinc-400'} borderRadius="rounded-lg">
          <img src={imgUrl} alt={`Categoria de ${title}`} className="rounded-lg object-cover w-full h-full" />
        </Card>
        <div className="">
         <p className="text-center">  {title} </p>
        </div>
    </div>
  )
}

// Components
import Card from "./Card"

export default function SmallCard({title}) {
  return (
    <div className='w-20 text-wrap text-sm text-zinc-700'>
        <Card boxSize={'w-20 h-20'} background={'bg-zinc-400'}/>
        <p> {title} </p>
    </div>
  )
}

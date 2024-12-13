

export default function HorizontalScrollContainer({children}) {
  return (
    <div className={`flex scrollbar-hidden overflow-x-scroll space-x-4 pt-1 pb-1 `}>
        {children}
    </div>
  )
}

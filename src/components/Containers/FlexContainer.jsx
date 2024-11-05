

export default function FlexContainer({children, flexMode}) {
  return (
    <div className={`flex  ${flexMode}`}>
        {children}
    </div>
  )
}


export default function Card({boxSize, margins, background, children, box, borderRadius}) {
  return (
    <div className= {`   shrink-0 mb-1.5 ${boxSize} ${margins} ${background} ${box} ${borderRadius}`} > {children} </div>
  );
}

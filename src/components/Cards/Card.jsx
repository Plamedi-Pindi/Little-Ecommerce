
export default function Card({boxSize, margins, background, children, box}) {
  return (
    <div className= {`  rounded-lg shrink-0 mb-1.5 ${boxSize} ${margins} ${background} ${box}`} > {children} </div>
  );
}

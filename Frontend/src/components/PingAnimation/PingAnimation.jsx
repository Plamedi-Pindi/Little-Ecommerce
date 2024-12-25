
export const PingAnimation = ({position}) => {
    return (
      <span className={`absolute flex items-center justify-center  h-3 w-3 mr-1 ${position}`}>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-details"></span>
      </span>
    );
  };
interface IndicatorProps {
  color: string;
  onClick?: () => void;
  text?: string;
  pulse?: boolean;
}

function Indicator({ color, onClick, text, pulse }: IndicatorProps) {
  return (
    <div className={`relative ${pulse ? 'animate-pulse' : ''}`}>
      <span
        onClick={onClick}
        className={`${color} absolute bottom-8 right-0 w-5 h-5 border-2 border-white rounded-full`}
      >
        <p className="whitespace-nowrap animate-bounce font-thin text-gray-700 absolute bottom-3 right-0">{text}</p>
      </span>
    </div>
  );
}

export default Indicator;

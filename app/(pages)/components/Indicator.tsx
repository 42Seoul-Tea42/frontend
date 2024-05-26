interface IndicatorProps {
  color: string;
  onClick?: () => void;
  text?: string;
}

function Indicator({ color, onClick, text }: IndicatorProps) {
  return (
    <div className="relative">
      <span
        onClick={onClick}
        className={`${color} absolute bottom-8 right-0 w-5 h-5 border-2 border-white rounded-full`}
      >
        <p className="font-thin text-gray-700 absolute bottom-0 right-5">{text}</p>
      </span>
    </div>
  );
}

export default Indicator;

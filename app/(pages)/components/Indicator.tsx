interface IndicatorProps {
  color: string;
}

function Indicator({ color }: IndicatorProps) {
  return (
    <div className="relative">
      <span
        className={`${color} absolute bottom-8 right-0 w-5 h-5 border-2 border-white dark:border-gray-800 rounded-full`}
      ></span>
    </div>
  );
}

export default Indicator;

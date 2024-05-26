interface HeartSVGProps {
  color: string;
}

const HeartSVG: React.FC<HeartSVGProps> = ({ color }) => {
  return (
    <svg
      className="w-8 h-8 text-gray-400 opacity-50"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={color}
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
      />
    </svg>
  );
};

export default HeartSVG;

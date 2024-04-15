type HyperBlueLinkProps = {
  text: string;
  onClick: () => void;
};

function HyperBlueLink({ text, onClick }: HyperBlueLinkProps) {
  return (
    <p onClick={onClick} className="hover:text-blue-600 hover:underline">
      {text}
    </p>
  );
}

export default HyperBlueLink;

type HyperBlueLinkProps = {
  text: string;
  onClick: () => void;
};

function HyperBlueLink({ text, onClick }: HyperBlueLinkProps) {
  return (
    <p onClick={onClick} className="ms-auto text-blue-700 hover:underline text-sm">
      {text}
    </p>
  );
}

export default HyperBlueLink;

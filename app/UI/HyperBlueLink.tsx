type HyperBlueLinkProps = {
  text: string;
  onClick: () => void;
};

function HyperBlueLink({ text, onClick }: HyperBlueLinkProps) {
  return (
    <div onClick={onClick} className="ms-auto text-blue-700 hover:underline text-sm">
      {text}
    </div>
  );
}

export default HyperBlueLink;

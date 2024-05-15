type BlueHyperLinkProps = {
  text: string;
  onClick: () => void;
};

function BlueHyperLink({ text, onClick }: BlueHyperLinkProps) {
  return (
    <div onClick={onClick} className="ms-auto text-blue-700 hover:underline text-sm">
      {text}
    </div>
  );
}

export default BlueHyperLink;

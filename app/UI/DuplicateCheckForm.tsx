import { SubmitButton } from '.';

type DuplicateCheckFormProps = {
  onClick: () => void;
  text: string;
  form: JSX.Element;
};

const DuplicateCheckForm: React.FC<DuplicateCheckFormProps> = ({ onClick, form, text }) => {
  return (
    <div className="flex gap-4 items-start">
      {form}
      <SubmitButton text={text} onClick={onClick} />
    </div>
  );
};

export default DuplicateCheckForm;

import { SubmitButton } from '../../../UI';

type DuplicateCheckFieldProps = {
  onClick: () => void;
  text: string;
  form: JSX.Element;
};

const DuplicateCheckField: React.FC<DuplicateCheckFieldProps> = ({ onClick, form, text }) => {
  return (
    <div className="flex gap-4 items-start">
      {form}
      <div>
        <SubmitButton type="button" text={text} onClick={onClick} />
      </div>
    </div>
  );
};

export default DuplicateCheckField;

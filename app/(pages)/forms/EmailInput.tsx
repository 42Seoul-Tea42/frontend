import InputFloatingLabel from '../../UI/InputFloatingLabel';

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function EmailInput({ value, onChange }: EmailInputProps) {
  return <InputFloatingLabel type="email" value={value} onChange={onChange} text="Email" autoComplete="email" />;
}

export default EmailInput;

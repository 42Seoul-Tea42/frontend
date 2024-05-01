import InputFloatingLabel from '../../UI/InputFloatingLabel';

interface LoginIdInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LoginIdInput({ value, onChange }: LoginIdInputProps) {
  return <InputFloatingLabel type="text" value={value} onChange={onChange} text="Login ID" autoComplete="username" />;
}

export default LoginIdInput;

import { SubmitButton } from '../../UI';

interface LoginFormProps {
  setId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  lostPassword: JSX.Element;
  receiveEmail: JSX.Element;
}

const LoginForm: React.FC<LoginFormProps> = ({
  setId,
  setPassword,
  lostPassword,
  onSubmit,
  receiveEmail
}: LoginFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6 mb-1 text-start">
      <div className="min-w-[300px]">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your ID</label>
        <input
          type="text"
          name="username"
          onChange={setId}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder=""
          required
          autoComplete="username"
        />
      </div>
      <div className="w-full">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={setPassword}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
          autoComplete="new-password"
        />
      </div>
      <div className="flex justify-center items-center gap-3">
        {receiveEmail}
        <p className="text-gray-700"> or </p>
        {lostPassword}
      </div>
      <SubmitButton text="Login your Account" />
    </form>
  );
};

export default LoginForm;

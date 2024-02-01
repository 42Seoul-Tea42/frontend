import Link from "next/link";

const CreateAccountButton: React.FC = () => {
  return(
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered?{' '}
      <Link href="/auth/signup" className="text-blue-700 hover:underline dark:text-blue-500">
        Create account
      </Link>
    </div>
  )
}

export default CreateAccountButton;

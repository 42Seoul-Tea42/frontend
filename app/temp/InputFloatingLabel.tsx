type InputFloatingLabelProps = {
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text?: string;
  autoComplete?: string;
  maxLength?: number;
  required?: boolean;
};

function InputFloatingLabel({
  type,
  value,
  onChange,
  text,
  autoComplete,
  maxLength,
  required
}: InputFloatingLabelProps) {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        id={`${type}_${text}_${value}`}
        type={type}
        name={`floating_${type}_${text}`}
        value={value}
        onChange={onChange}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
        maxLength={maxLength}
        placeholder=" "
        autoComplete={autoComplete}
        required={required ? true : false}
      />
      <label
        htmlFor={`${type}_${text}_${value}`}
        className="peer-focus:font-medium absolute text-sm text-gray-500 uration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {text}
      </label>
    </div>
  );
}

export default InputFloatingLabel;

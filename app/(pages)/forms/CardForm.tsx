interface CardFormProps {
  onSubmit: () => void;
  inputs: JSX.Element;
  subject: string;
  button: JSX.Element;
}

const CardForm: React.FC<CardFormProps> = ({ onSubmit, subject, inputs, button }) => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={event => {
            /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
            event.preventDefault();
            /** 폼 컨트롤 */
            onSubmit();
          }}
          className="max-w-md min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-pink-500/50">{subject}</h5>
          {inputs}
          <div className="flex justify-end">{button}</div>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
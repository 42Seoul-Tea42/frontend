import Image from 'next/image';

interface ImageConverterProps {
  isAction: boolean;
}

const ImageConverter: React.FC<ImageConverterProps> = ({ isAction }) => {
  return (
    <div className="mx-auto mt-20 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div
        className={`relative overflow-hidden rounded-lg h-96 ${
          isAction ? 'brightness-50 shadow-2xl' : ''
        }`}
      >
        <Image
          src="/조유리.webp"
          alt="face"
          width={500}
          height={500}
          priority={true}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default ImageConverter;

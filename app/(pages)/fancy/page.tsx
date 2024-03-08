import Image from 'next/image';

const Fancy = () => {
  // 여기에 이미지 데이터를 정의합니다.
  const images = [
    { src: '1.jpg', alt: ' 1' },
    { src: '2.jpg', alt: ' 2' },
    { src: '3.jpg', alt: ' 3' },
    { src: '4.jpg', alt: ' 4' },
    { src: '5.jpg', alt: ' 5' },
    { src: '6.jpg', alt: ' 6' }
  ];

  return (
    <div className="flex flex-wrap justify-center h-screen">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-1/4 p-4">
            <Image src={`/emoji/${image.src}`} width={500} height={500} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fancy;

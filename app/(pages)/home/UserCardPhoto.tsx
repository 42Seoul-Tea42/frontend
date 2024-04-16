import Image from 'next/image';
type UserCardPhotoProps = {
  src: string;
  alt: string;
};

function UserCardPhoto({ src, alt }: UserCardPhotoProps) {
  return (
    <Image
      fill
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      src={src}
      alt={`Preview ${alt}`}
      className="z-0 rounded-t-lg object-cover hover:brightness-75"
      draggable="false"
    />
  );
}

export default UserCardPhoto;

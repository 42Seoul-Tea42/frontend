import Image from 'next/image';
type UserCardPhotoProps = {
  src: string;
  alt: string;
};

function UserCardPhoto({ src, alt }: UserCardPhotoProps) {
  return (
    <Image
      priority
      width={200}
      height={200}
      src={src}
      alt={`Preview ${alt}`}
      className="h-[200px] relative z-0 rounded-t-lg object-cover hover:brightness-75"
      draggable="false"
    />
  );
}

export default UserCardPhoto;

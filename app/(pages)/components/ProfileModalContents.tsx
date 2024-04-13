type ProfileModalContentsProps = {
  content: JSX.Element;
  forwardedRef: React.RefObject<HTMLDivElement>;
};

const ProfileModalContents: React.FC<ProfileModalContentsProps> = ({ content, forwardedRef }) => {
  return <div ref={forwardedRef}>{content}</div>;
};

export default ProfileModalContents;

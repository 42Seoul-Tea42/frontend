type ProfileDetailModalControlProps = {
  props: JSX.Element;
  modalRef: React.RefObject<HTMLDivElement>;
  modalVisible: boolean;
};

function ProfileDetailModalControl({ modalRef, modalVisible, props }: ProfileDetailModalControlProps) {
  return (
    <>
      {modalVisible && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden={false}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70"
        >
          <div ref={modalRef} className="bg-white w-full max-w-3xl p-5 rounded-lg shadow-lg">
            {props}
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileDetailModalControl;

import React from 'react';

type ChattingRoomListVisibleControlProps = {
  modalRef: React.RefObject<HTMLDivElement>;
  isModalOpen: boolean;
  props: React.ReactNode;
};

function ChattingRoomListVisibleControl({ modalRef, isModalOpen, props }: ChattingRoomListVisibleControlProps) {
  return (
    <div className={isModalOpen ? '' : 'hidden'}>
      <div
        tabIndex={-1}
        className="fixed top-0 left-0 w-full h-full flex items-start justify-center rounded-xl bg-gray-800 bg-opacity-50"
      >
        <div ref={modalRef} className="bg-white w-full rounded-xl">
          {props}
        </div>
      </div>
    </div>
  );
}

export default ChattingRoomListVisibleControl;

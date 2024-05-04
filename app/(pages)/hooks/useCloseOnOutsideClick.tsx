import { useEffect, useRef, useState } from 'react';

type CloseOnOutsideClickProps = {
  initialState: boolean;
};

/**
 * @type 커스텀 훅
 * @param { initialState: boolean }
 * @description ref를 이용하여 해당 요소 외부 클릭시 isOpen을 false로 변경
 * @returns [ref, isOpen, setIsOpen] as const
 */
const useCloseOnOutsideClick = ({ initialState }: CloseOnOutsideClickProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [isOpen]);

  return [ref, isOpen, setIsOpen] as const;
};

export default useCloseOnOutsideClick;

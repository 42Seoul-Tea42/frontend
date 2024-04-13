import { useEffect } from 'react';

type RefType<T extends HTMLElement> = ((instance: T | null) => void) | React.MutableRefObject<T | null> | null;

const useCloseOnOutsideClick = <T extends HTMLElement>(
  ref: React.MutableRefObject<T | null>,
  isOpen: boolean,
  onClose: () => void
) => {
  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onClose();
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
};

export default useCloseOnOutsideClick;

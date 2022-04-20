import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const onMouseDown = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('touchstart', onMouseDown);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('touchstart', onMouseDown);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;

import React, { SyntheticEvent, useEffect } from 'react';

const useOnClickOutside = (
  ref:
    | React.MutableRefObject<HTMLElement>
    | React.MutableRefObject<HTMLElement>[],
  openState: boolean,
  handler: (e: SyntheticEvent) => void
) => {
  const arrayedRefs = Array.isArray(ref) ? ref : [ref];
  const listener = e => {
    e.stopPropagation();
    e.preventDefault();
    const isClose =
      arrayedRefs[0].current &&
      arrayedRefs.filter(rr => rr.current.contains(e.target)).length === 0;
    if (isClose) {
      handler(e);
    }
  };

  useEffect(() => {
    if (openState) {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    }
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [openState]);
};

export default useOnClickOutside;

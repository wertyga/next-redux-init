let debounceTimer: NodeJS.Timer | null = null;
export const debounce = (func: Function, time = 250) => {
  return function (...args) {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }
    debounceTimer = setTimeout(() => {
      func(...args);
    }, time);
  };
};

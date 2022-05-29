export const geNoun = (
  count: number = 0,
  one: string,
  two?: string,
  five?: string,
  noNumber?: boolean
) => {
  const num = noNumber ? '' : count;
  if (count === 1) return `${num} ${one}`;
  if (count > 1 && count < 5) return `${num} ${two || one}`;
  if (count >= 5 || count === 0) return `${num} ${five || two || one}`;
};

export const capitalFirst = (word: string) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

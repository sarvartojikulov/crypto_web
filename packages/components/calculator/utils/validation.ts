export const isPositiveNumber = (input: number): boolean => {
  const isNumber = !Number.isNaN(input);
  const isNegative = input < 0;
  return isNumber || !isNegative;
};

export const fiatMinimal = (input: number): boolean => {
  if (input < 30) return false;
  return true;
};

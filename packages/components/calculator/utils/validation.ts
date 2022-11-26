export const isPositiveNumber = (input: number): boolean => {
  const isNumber = !Number.isNaN(input);
  const isPositive = input > 0;
  return isNumber && isPositive;
};

export const fiatMinimal = (input: number): boolean => {
  if (input < 30) return false;
  return true;
};

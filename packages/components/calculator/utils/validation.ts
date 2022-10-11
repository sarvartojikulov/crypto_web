export const validateInputs = (input: number) => {
  const isNumber = !Number.isNaN(input);
  const isNegative = input < 0;

  return !isNumber || isNegative;
};

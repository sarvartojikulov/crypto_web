export const validateInputs = (input: string) => {
  const num = Number(input);
  const isNumber = !Number.isNaN(num);
  const isNegative = num < 0;
  const notEmpty = input.length !== 0;

  return (!isNumber || isNegative) && notEmpty;
};

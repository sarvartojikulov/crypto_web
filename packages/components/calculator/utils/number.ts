export const roundToDecimal = (num: number, decimal: number): number => {
  const factorOfTen = Math.pow(10, decimal);
  return Math.round(num * factorOfTen) / factorOfTen;
};

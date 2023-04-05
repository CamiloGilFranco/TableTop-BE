export const random = (lowerLimit: number, upperLimit: number) => {
  const randomNumber = Math.floor(
    Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit
  );

  return randomNumber;
};

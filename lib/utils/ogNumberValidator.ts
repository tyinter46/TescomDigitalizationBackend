export const validateAndFormat = (input: string) => {
  // Regular expression to check if the first two characters are letters
  const regex = /^[A-Za-z]{2}/;

  if (regex.test(input)) {
    // Convert the first two letters to uppercase and concatenate with the rest of the string
    const formattedInput = input.slice(0, 2).toUpperCase() + input.slice(2);
    return formattedInput;
  } else {
    throw new Error('Input must start with two letters.');
  }
};

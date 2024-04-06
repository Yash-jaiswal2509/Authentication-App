export const errorHandler = (statusCode, messaage) => {
  const error = new Error();
  error.message = messaage;
  error.statusCode = statusCode;

  return error;
};

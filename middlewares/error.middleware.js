export const errorMiddleware = (err, req, res, next) => {
console.log("err",err)
  //   console.error(err.stack);
  const statusCode = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetails = err.extraDetails || "ERROR FROM BACKEND";
  res.status(statusCode).json({ message: message, extraDetails: extraDetails });
};

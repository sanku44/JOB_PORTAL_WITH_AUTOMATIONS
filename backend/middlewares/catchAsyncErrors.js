export const catchAsyncErrors = (theFunction) => {

  // this is the funtion parameters
    return (req, res, next) => {
    Promise.resolve(theFunction(req, res, next)).catch(next);
  };
};


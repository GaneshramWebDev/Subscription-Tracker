const errormiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };

    error.message = err.message;
    console.log(err);

    // Mongoose badobject id error

    if (err.name === "CastError") {
      const message = "Resource not found";

      error = new Error(message);
      error.status = 404;
    }

    // Mongoose duplicate key error
    if (err.name === "MongoError" && err.code === 11000) {
      const message = "Duplicate entry";

      error = new Error(message);
      error.status = 400;
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);

      error = new Error(message.join(", "));
      error.status = 400;
    }

    res.status(error.status || 500).json({
      success: false,
      error: error.message || "Server Error",
    });
  } catch (error) {
    next(error);
  }
};

export default errormiddleware;
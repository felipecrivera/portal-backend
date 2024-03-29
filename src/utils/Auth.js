import jwt from "jsonwebtoken";
import errorHandler from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return next(errorHandler(403, "Invalid Token"));
      }
      req.user = decoded;
      return next();
    });
  } else {
    return next(errorHandler(401, "Unauthorized request"));
  }
};

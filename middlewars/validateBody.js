const HttpsError = require("../helpers");

const validateBody = (schema) => {
  const fnc = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpsError(404, error.message));
    }
    next();
  };
  return fnc;
};

module.exports = validateBody;

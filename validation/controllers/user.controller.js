const { validationResult } = require("express-validator");

const addUser = (req, res, next) => {
  try {
    const errors = validationResult(req);

    // if there is error then return Error
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    // save data to DB
    User.create(req.body);

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};

module.exports = { addUser };
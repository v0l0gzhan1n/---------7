const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const { userDataValidate } = require("../validations/user.validation");

router.post("/", userDataValidate, UserController.addUser);

module.exports = router;

router.post(
  "/schama-based",
  checkSchema(userDataValidateSchemaBased),
  UserController.addUser
);

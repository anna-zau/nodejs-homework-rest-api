const express = require("express");
const ctrl = require("../../controllers/auth");
const {
  validateBody,
  authentificate,
  uploadAvatar,
} = require("../../middlewars");
const { schemas } = require("../../models/users");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.post("/logout", authentificate, ctrl.logout);

router.get("/current", authentificate, ctrl.getCurrent);

router.patch(
  "/",
  authentificate,
  validateBody(schemas.updateSubscription),
  ctrl.updateSubscription
);

router.patch(
  "/avatars",
  authentificate,
  uploadAvatar.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;

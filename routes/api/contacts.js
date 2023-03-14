const express = require("express");

const ctrl = require("../../controllers/contacts");
const { isValidId, validateBody, authentificate } = require("../../middlewars");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", authentificate, ctrl.listContacts);

router.get("/:id", authentificate, isValidId, ctrl.getById);

router.post(
  "/",
  authentificate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.put(
  "/:id",
  authentificate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.delete("/:id", authentificate, isValidId, ctrl.deleteContact);

router.patch(
  "/:id/favorite",
  authentificate,
  isValidId,
  validateBody(schemas.updateFavouriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;

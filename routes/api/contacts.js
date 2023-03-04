const express = require("express");

const ctrl = require("../../controllers/contacts");
const { isValidId, validateBody } = require("../../middlewars");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.delete("/:id", isValidId, ctrl.deleteContact);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavouriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;

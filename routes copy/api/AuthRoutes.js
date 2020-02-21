const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/auth"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/auth/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;

const express = require("express");
const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser
} = require("../controllers/users");

const User = require("../models/User");
const advancedResults = require("../middlewares/advancedResults");

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require("../middlewares/auth");

router.use(protect);
router.use(authorize("admin"));

router
  .route("/")
  .get(advancedResults(User), getUsers)
  .post(createUser);

router
  .route("/:id")
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

module.exports = router;

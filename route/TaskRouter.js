const express = require("express");
const {
  createData,
  showData,
  deleteData,
  updateData,
} = require("../controllers/taskcontroller");
const router = express.Router();

router.route("/create-data").post(createData);

router.route("/").get(showData);

router.route("/update-data/:id").put(updateData);

router.route("/delete-data/:id").delete(deleteData);

module.exports = router;

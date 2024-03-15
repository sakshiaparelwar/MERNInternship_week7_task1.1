const express = require("express");
const {
  createcourseData,
  showcourseData,
} = require("../controllers/coursecontroller");
const router = express.Router();

router.route("/createcourse-data").post(createcourseData);

router.route("/getcousredata").get(showcourseData);

module.exports = router;

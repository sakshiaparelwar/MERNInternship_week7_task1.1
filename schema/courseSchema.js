const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseId: { type: String, required: true },
    courseName: { type: String },
    instructor: { type: String },
    details: { type: String },
    duration: { type: String },
  },
  {
    collection: "Courses",
  }
);

module.exports = mongoose.model("Courses", courseSchema);

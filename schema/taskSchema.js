const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    courseId: { type: String },
    taskName: { type: String },
    dueDate: { type: String },
    details: { type: String },
  },
  {
    collection: "Tasks",
  }
);

module.exports = mongoose.model("Tasks", taskSchema);

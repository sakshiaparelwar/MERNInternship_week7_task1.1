const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 5001;
const dotenv = require("dotenv");
const cors = require("cors");
const taskRouter = require("./route/TaskRouter");
const courseRouter = require("./route/CourseRouter");

dotenv.config();

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while connecting to database");
});
db.on("open", () => {
  console.log("Database connected");
});

app.use(express.json());
app.use(cors());
app.use("/task", taskRouter);
app.use("/course", courseRouter);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

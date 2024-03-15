const courseSchema = require("../schema/courseSchema");

exports.createcourseData = async (req, res) => {
  try {
    const data = await courseSchema.create(req.body);
    // console.log(data);

    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "INternal Server error" });
  }
};

exports.showcourseData = async (req, res) => {
  try {
    const alldata = await courseSchema.find({});
    // console.log(alldata);

    res.status(201).send(alldata);
  } catch (error) {
    console.log(error);
  }
};

const taskSchema = require("../schema/taskSchema");

exports.createData = async (req, res) => {
  try {
    const data = await taskSchema.create(req.body);
    // console.log(data);

    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "INternal Server error" });
  }
};

exports.showData = async (req, res) => {
  try {
    const alldata = await taskSchema.find({});
    // console.log(alldata);

    res.status(201).send(alldata);
  } catch (error) {
    console.log(error);
  }
};

exports.updateData = async (req, res) => {
  try {
    const id = req.params.id;
    let singleData = await taskSchema.findById(id);

    const updatedData = await taskSchema.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // console.log(updatedData);
    res.status(201).send(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedata = await taskSchema.findByIdAndDelete(id);
    // console.log(deletedata);

    res.status(201).send(deletedata);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

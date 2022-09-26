const { db } = require("./db");

const getSubject = async (req, res) => {
  try {
    const [rows, fields] = await db.promise().query("SELECT * FROM subject");
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const createSubject = async (data) => {
  try {
    const id = data.id;
    const name = data.name;
    const classID = data.classID;
    const startTime = data.startTime;
    const endTime = data.endTime;

    const [rows, fields] = await db
      .promise()
      .query(
        "INSERT INTO subject (id, name, classID,startTime,endTime) values(?,?,?)",
        [id, name, classID, startTime, endTime]
      );

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getSubject,
  createSubject,
};

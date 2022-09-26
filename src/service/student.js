const { db } = require("./db");

const getAllStudent = async (classID) => {
  try {
    const [rows, fields] = await db.promise().query("select * FROM student ");
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const createStudent = async (data) => {
  try {
    const id = data.id;
    const name = data.name;
    const age = data.age;
    const email = data.email;
    const classID = data.classID;
    const sex = data.sex;

    const [rows, fields] = await db
      .promise()
      .query(
        "INSERT INTO student (id, name, age,email,classID,sex) values(?,?,?)",
        [id, name, age, email, classID, sex]
      );

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllStudent,
  createStudent,
};

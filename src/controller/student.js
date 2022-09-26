const { db } = require("../service/db");
const { RESPONSE_CODE } = require("../constant");
// const { getAllStudentByClassId } = require("../service/student");
const { getAllStudent, createStudent } = require("../service/student");

const getAllStudentController = async (req, res) => {
  const listData = await getAllStudent;

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get all student successful",
    data: listData,
  });
};

const createStudentController = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  const classID = req.body.classID;
  const sex = req.body.sex;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }
  const result = await createStudent({ id, name, age, email, classID, sex });
  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Create student successful",
    data: result,
  });
};
//update student
const updateStudentController = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;
  const sex = req.body.sex;
  const email = req.body.email;
  const classID = req.body.classID;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }

  const [rows, fields] = await db
    .promise()
    .query(
      `UPDATE student set name = ?, age = ?, sex = ?, email = ?, classID = ? where id = ?`,
      [name, age, sex, email, classID, id]
    );

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Update student successful",
    data: rows,
  });
};

const deleteStudentController = async (req, res) => {
  const studentId = req.params.studentId;

  if (studentId === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@studentId can not be empty",
    });
  }

  const [rows, fields] = await db
    .promise()
    .query(`delete from student where id = (?);`, [studentId]);

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Delete student successful",
  });
};

const getAllStudentStudentController = async (req, res) => {
  const classID = req.params.classID;

  if (classID === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@classID can not be empty",
    });
  }
  // const listClass = await getAllStudentByClassId(classID);

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get all student in class successful",
    data: listClass,
  });
};

const getIdStudentController = async (req, res) => {
  const [rows, fields] = await db.promise().query("SELECT id FROM student");

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get list id student successful",
    data: rows,
  });
};

module.exports = {
  getAllStudentController,
  createStudentController,
  getAllStudentStudentController,
  getIdStudentController,
  updateStudentController,
  deleteStudentController,
};

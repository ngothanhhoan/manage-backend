const { db } = require("../service/db");
const { RESPONSE_CODE } = require("../constant");
// const { getAllStudentByClassId } = require("../service/student");
const { getAllSubject, createSubject } = require("../service/subject");

const getAllSubjectController = async (req, res) => {
  const listData = await getAllSubject();

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get all subject successful",
    data: rows,
  });
};

const createSubjectController = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const classID = req.body.classID;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }
  const result = await createClass({ id, name, classID, startTime, endTime });

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Create subject successful",
    data: result,
  });
};

const updateSubjectController = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const classID = req.body.classID;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }

  const [rows, fields] = await db
    .promise()
    .query(
      `UPDATE subject set name = ?, classID = ?, startTime = ?, endTime = ? where id = ?`,
      [name, classID, startTime, endTime, id]
    );

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Update subject successful",
    data: rows,
  });
};

const deleteSubjectController = async (req, res) => {
  const subjectId = req.params.subjectId;

  if (subjectId === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@subjectId can not be empty",
    });
  }

  const [rows, fields] = await db
    .promise()
    .query(`delete from subject where id = (?);`, [idDelete]);

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Delete subject successful",
  });
};

const getAllStudentSubjectController = async (req, res) => {
  const subjectID = req.params.subjectID;

  if (subjectID === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@subjectID can not be empty",
    });
  }
  // const listSubject = await getAllStudentByClassId(subjectID);

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get all student in subject successful",
    data: listSubject,
  });
};

const getIdSubjectController = async (req, res) => {
  const [rows, fields] = await db.promise().query("SELECT id FROM subject");

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get list id subject successful",
    data: rows,
  });
};

module.exports = {
  getAllSubjectController,
  createSubjectController,
  getAllStudentSubjectController,
  getIdSubjectController,
  deleteSubjectController,
  updateSubjectController,
};

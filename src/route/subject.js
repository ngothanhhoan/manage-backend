const express = require("express");
const {
  getAllSubjectController,
  createSubjectController,
  deleteSubjectController,
  updateSubjectController,
  getAllStudentSubjectController,
  getIdSubjectController,
} = require("../controller/subject");

const subjectRouter = express.Router();

subjectRouter.get("/", getAllSubjectController);
subjectRouter.post("/", createSubjectController);
subjectRouter.put("/", updateSubjectController);
subjectRouter.get("/listIdSubject", getIdSubjectController);
subjectRouter.delete("/:idDelete", deleteSubjectController);
classRouter.get("/getSubject/:subjectID", getAllStudentSubjectController);

module.exports = subjectRouter;

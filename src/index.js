const express = require("express");
const db = require("./service/db");
const cors = require("cors");
const router = require('./route');
const { initTable } = require("./service/db");

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(PORT, async () => {
  await initTable();
  console.log(`🚀 Server running on port: ${PORT}`);
});

// app.post("/class/postIdEdit", (req, res) => {
//   const idEdit = req.body.idEdit;

//   db.query(
//     "INSERT INTO class (id, name, numberOfStudent) values(?,?,?)",
//     [id, name, numOfStu],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(result);
//       }
//     }
//   );
// });

// //get infomation by id classs
// app.post("/class/getInfoById", (req, res) => {
//   const idEdit = req.body.idEdit;

//   db.query("SELECT * FROM class where id = (?)", [idEdit], (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// //get list student by id class
// app.post("/class/getListStudentById", (req, res) => {
//   const idClass = req.body.idClass;
//   console.log(`SELECT * FROM student where id =  ${idClass}`);

//   db.query(
//     "SELECT * FROM student where classID = (?)",
//     [idClass],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.send(result);
//     }
//   );
// });

// //get list id class
// app.get("/class/getListId", (req, res) => {
//   db.query("select id from class", (err, result) => {
//     if (err) {
//       console.log(err);
//     }

//     res.send(result);
//   });
// });

// //get list student by classID
// app.post("/class/getListStudentById", (req, res) => {
//   const idClass = req.body.idClass;
//   console.log(`select * from student where class = ${idClass}`);

//   db.query(
//     "select * from student where classID = (?)",
//     [idClass],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(result);
//       }
//     }
//   );
// });

// //-----------------------STUDENT------------------
// //get list student information
// app.get("/student/getStudent", (req, res) => {
//   db.query("SELECT * FROM student", (err, result) => {
//     if (err) {
//       console.log(err);
//     }

//     res.send(result);
//   });
// });

// //get list student information
// app.get("/student/getListId", (req, res) => {
//   db.query("SELECT id FROM student", (err, result) => {
//     if (err) {
//       console.log(err);
//     }

//     res.send(result);
//   });
// });

// //add student
// app.post("/student/add", (req, res) => {
//   const id = req.body.id;
//   const name = req.body.name;
//   const age = req.body.age;
//   const email = req.body.email;
//   const classID = req.body.classID;
//   const sex = req.body.sex;

//   db.query(
//     "INSERT INTO student (id, name, age, email,classID,sex) values(?,?,?,?,?,?)",
//     [id, name, age, email, classID, sex],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(result);
//       }
//     }
//   );
// });

// //get infomation student by id
// app.post("/student/getInfoById", (req, res) => {
//   const idEdit = req.body.idEdit;

//   db.query("SELECT * FROM student where id = (?)", [idEdit], (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// //edit student
// app.post("/student/editStudent", (req, res) => {
//   const id = req.body.id;
//   const name = req.body.name;
//   const age = req.body.age;
//   const email = req.body.email;
//   const oldId = req.body.oldId;
//   const classID = req.body.classID;
//   const sex = req.body.sex;

//   db.query(
//     "UPDATE student set id = ?, name = ?, age = ?, email= ?, sex =?, classID = ?where id = ?",
//     [id, name, age, email, sex, classID, oldId],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.send(result);
//     }
//   );
// });

// //delete student
// app.post("/student/deleteStudent", (req, res) => {
//   const idDelete = req.body.idDelete;

//   db.query("DELETE from student where id = (?)", [idDelete], (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// //--------------------- SUBJECT-----------------------
// //add new subject
// app.post("/subject/add", (req, res) => {
//   const id = req.body.id;
//   const name = req.body.name;
//   const classID = req.body.classID;
//   const startTime = req.body.startTime;
//   const endTime = req.body.endTime;

//   db.query(
//     "INSERT INTO subject (id, name, classID, startTime, endTime) values(?,?,?,?,?)",
//     [id, name, classID, startTime, endTime],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(result);
//       }
//     }
//   );
// });

// //get all infomation of subject
// app.get("/subject/getSubject", (req, res) => {
//   db.query("SELECT * FROM subject", (err, result) => {
//     if (err) {
//       console.log(err);
//     }

//     res.send(result);
//   });
// });

// //get list id of subject
// app.get("/subject/getListId", (req, res) => {
//   db.query("SELECT id FROM subject", (err, result) => {
//     if (err) {
//       console.log(err);
//     }

//     res.send(result);
//   });
// });

// //edit infomation subject
// app.post("/subject/getInfoById", (req, res) => {
//   const idEdit = req.body.idEdit;
//   db.query("SELECT * FROM subject where id = (?)", [idEdit], (err, result) => {
//     if (err) {
//       console.log(err);
//     }

//     res.send(result);
//   });
// });

// //delete subject
// app.post("/subject/deleteSubject", (req, res) => {
//   const idDelete = req.body.idDelete;

//   db.query("delete from subject where id = (?)", [idDelete], (err, result) => {
//     if (err) {
//       console.log(err);
//     }

//     res.send(result);
//   });
// });

// //edit infomation class
// app.post("/subject/editSubject", (req, res) => {
//   const id = req.body.id;
//   const name = req.body.name;
//   const classID = req.body.classID;
//   const startTime = req.body.startTime;
//   const endTime = req.body.endTime;
//   const oldId = req.body.oldId;

//   db.query(
//     `UPDATE subject set id = ?, name = ?, classID = ?, startTime = ?, endTime = ? where id = ?;`,
//     [id, name, classID, startTime, endTime, oldId],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.send(result);
//     }
//   );
// });


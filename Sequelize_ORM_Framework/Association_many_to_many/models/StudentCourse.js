const db = require('../configure/db');

const StudentCourse = db.define('studentcourse',{})

module.exports = StudentCourse;

// create table studentcourse(
//     studentId int,
//     courseId int,
//     foreign key(studentId) references students(id),
//     foreign key(courseId) references courses(id)
// );

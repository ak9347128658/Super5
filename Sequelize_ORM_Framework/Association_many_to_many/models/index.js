const Student = require('./Student');
const Course = require('./Course');
const StudentCourse = require('./StudentCourse');

Student.belongsToMany(Course,{through:StudentCourse});
Course.belongsToMany(Student,{through:StudentCourse});

module.exports = {Student,Course,StudentCourse};
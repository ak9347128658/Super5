const {Student,Course,StudentCourse} = require('./models/index')

const db = require('./configure/db');

const createStudent = async(username,email)=>{
    try{
        await Student.create({
            name:username,
            email:email
        });
        console.log('Student created');
    }catch(err){
        console.error(err);
    }
}

const createCourse = async(paramname)=>{
    try{
        await Course.create({name:paramname});
        console.log('Course created');
    }catch(err){
        console.error(err);
    }
}

const addCourseToStudent = async(studentId,courseId)=>{
    try{
        const student = await Student.findByPk(studentId);
        const course = await Course.findByPk(courseId);
        await student.addCourse(course)
        console.log('Course added to student');
    }catch(err){
        console.error(err);
    }
}


const getStudentCourses = async(studentId)=>{
    try{
        const student = await Student.findByPk(studentId,{
            include:Course
        });
        console.log(student?.dataValues);
        console.log(student?.dataValues?.courses.map(course=>course?.dataValues));
    }catch(err){
        console.error(err);
    }
}

const getCourseStudents = async(courseId)=>{
    try{
        const course = await Course.findByPk(courseId,{
            include:Student
        });
        console.log(course?.dataValues);
        console.log(course?.dataValues?.students.map(student=>student?.dataValues));
    }catch(err){
        console.error(err);
    }
}

const dbConnection = async()=>{
   await db.sync();
//    await createStudent('John Doe','johndoe@gmail.com');
//    await createStudent('Vikram Singh','vikramsign@gmail.com');
//    await createStudent('Rahul Singh','rahulsingh@gmail.com');

//     await createCourse('Mern stack Development');
//     await createCourse('React Native Development');
//     await createCourse('Angular Development');
//     await createCourse('Java Development');
//     await createCourse('Python Development');
//     await createCourse('C++ Development');
//     await createCourse('C# Development');
//     await createCourse('Ruby Development');
//     await createCourse('Ruby on Rails Development');
//     await createCourse('Django Development');
//     await createCourse('Flask Development');
//     await createCourse('Spring Development');
//     await createCourse('Hibernate Development');
//     await createCourse('Express Development');
//     await createCourse('Node Development');
//     await createCourse('MongoDB Development');
//     await createCourse('MySQL Development');
//     await createCourse('PostgreSQL Development');
//     await createCourse('SQLite Development');
//     await createCourse('Oracle Development');

//  await addCourseToStudent(1,1);
//  await addCourseToStudent(1,2);
// await getStudentCourses(1);
// await getStudentCourses(2);
await getCourseStudents(3);
}

dbConnection();
const Schema = require("./students_pb");
const fs = require("fs");

const tom = new Schema.Student();
tom.setId('123');
tom.setName('Tom');
tom.setAge(20);
tom.setScore(60);

console.log('the first student is ' + tom.getName());
// the first student is Tom

const render = new Schema.Student();
render.setId('456');
render.setName('Render');
render.setAge(18);
render.setScore(101);

const zebra = new Schema.Student();
zebra.setId('789');
zebra.setName('Zebra');
zebra.setAge(21);
zebra.setScore(80);

const students = new Schema.Students();
students.addStudents(tom);
students.addStudents(render);
students.addStudents(zebra);

const binaryData = students.serializeBinary();
fs.writeFileSync('studentsProtobuf', binaryData);

const deserializeData = Schema.Students.deserializeBinary(binaryData);
console.log(deserializeData.toString());
//123,Tom,20,60,456,Render,18,101,789,Zebra,21,80


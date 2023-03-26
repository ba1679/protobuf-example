const fs = require('fs');
const crypto = require('crypto');

const students = [];

const tom = {
  id: crypto.randomUUID(),
  name: 'Tom',
  age: 20,
  score: 60
}

students.push(tom);

const render = {
  id: crypto.randomUUID(),
  name: 'Render',
  age: 18,
  score: 101
}

students.push(render);
students.push({
  id: crypto.randomUUID(),
  name: 'zebra',
  age: 20,
  score: 80
});

fs.writeFileSync('students.json', JSON.stringify(students));
const Students = [
    { id: 1, name: "ravi", age: 20 },
    { id: 2, name: "nani", age: 24 }
];

const newStudent = {
    id: 3,
    name: "ani",
    age: 22
};

Students.push(newStudent);

console.log("All students:", Students);

const studentReadID = 2;

const student = Students.find((stud) => stud.id === studentReadID);

if (student) {
    console.log(`Student with ID ${studentReadID}:`, student);
} else {
    console.log(`Student with ID ${studentReadID}: not found`);
}
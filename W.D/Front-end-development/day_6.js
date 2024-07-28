const marks = [70, 55, 64, 85, 85];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / marks.length;

console.log(`Average marks: ${averageMarks}`);
//object of marks
const totalMarks = 150;
const obj = {
  computer:42,
  maths:42,
  science:50
}
const values = Object.values(obj);
const sumOfMarks = values.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

const totalPercentage = sumOfMarks/totalMarks * 100;
console.log(totalPercentage);
//output should be
// {
//     userName: 'kaylin',
//     subjectCodes: ['M','S', 'G'],
//     subjectScores: [23,35,30]
// }
const userDetails={
  name: "kaylin",
  maths: 23,
  science: 35,
  gk:30
}

let firstLett = Object.keys(userDetails).filter((item) => {
if(item[0] != 'n' && typeof item[0] === 'string')
  return item[0]
})
let subjVal = Object.values(userDetails).filter((item) => {
if(typeof item[0] != 'string')
return item
})
const newObj = {
userName : userDetails.name,
subjectCodes: firstLett,
subjectScores: subjVal
}
console.log(newObj);
//console.log(firstLett);
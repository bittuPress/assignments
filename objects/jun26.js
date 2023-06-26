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
let subCodes = [];
const newObj = {
  userName : userDetails.name,
  subjectCodes: subCodes
}
console.log(newObj);


//console.log(Object.keys(userDetails))
Object.keys(userDetails).map((item, id) => {
  //console.log(item[0], id)
  // subCodes.push(item[0])
  if(item[0] != 'n'){
  subCodes.push(item[0]);
  }
})
console.log(subCodes);
const arr = [2,5,6,7];
// //calculate the sum of the array using either for of or for in

let total = 0;
for (var i in arr) {
  total += arr[i];
}
console.log(total);


const myDetails = [
  {id:3, name: 'hari'},
  {id:5, name: 'shyam'},
  {id:6, name: 'gopal'},
]

// return only array of ids: expected output  [3,5,6]

const idDetails = myDetails.map((item) => {
  // console.log(item);
  return item.id;
});
console.log(idDetails);

const rideDetails = {
    pickup: 'balaju',
    destination:'thamel',
    distance:'20km',
    unitKmPrice: 30
  };
  
  let distanceNum = parseInt(rideDetails.distance);
  let unitKmPrice = rideDetails.unitKmPrice;
  function finalPrice(distanceNum, unitKmPrice){
    console.log(unitKmPrice * distanceNum);
  }

  finalPrice(distanceNum,unitKmPrice); //function to calculate final price of ride
  
  //Q2 write a js function that checks if the object has status success or not
  //should return true or false
  
  const status1 ={
    status: 'onTheWay'
  };
  const status2 ={
    status: 'success'
  };
  
  const checkIfSucces=(checkStatus)=>{
  //write your code here
    // console.log(checkStatus);
    if(checkStatus.status === 'success'){
      return true;
    }else{
      return false;
    }
  };
  
  console.log(checkIfSucces(status1));  //should return false
  
  console.log(checkIfSucces(status2));  //should return true
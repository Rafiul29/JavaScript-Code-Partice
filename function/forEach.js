var arr = [1, 2, 3, 4, 5];
var sum = 0;

// arr.forEach((value,index,arr)=>{
//     sum+=value;
// })
// console.log(sum);

// implementation

function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
forEach(arr, function (value, index, arr) {
  console.log(value, index, arr);
  sum += value;
});
console.log(sum);

// forEach(arr, function (value, index, arr) {
//   arr[index] = value + 5;//orginal array chnages to the value
// });
// console.log(arr);

forEach(arr,function(value,index,arr){

})
console.log(arr);
// // for of loop in js
// let arr=[13,4,53,5,43,24,3];

// for( let i of arr){
//     console.log(i)
// }


// for(let v of "Rafiul Islam Rafi"){
//     console.log(v)
// }

//  let obj={
//     a:10,
//     b:20
//  }
// for(let i of obj){
//     console.log(i)
// }



// custom iterator............

let obj = {
  start: 1,
  end: 10,
  [Symbol.iterator]: function () {
    let currentValue = this.start;
    const self = this;
    return {
      next() {
        return {
          done: currentValue > self.end,
          value: currentValue > self.end ? undefined : currentValue++,
        };
      },
    };
  },
};

for(let i of obj){
    console.log(i)
}
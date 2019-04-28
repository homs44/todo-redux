
var a = [1,2,3,4,5,6];

const index = 3;
const newA = [...a.slice(0,index),...a.slice(index+1)]

console.log(newA);
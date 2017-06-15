function reverseArray(array) {
  let newArray = []
  let next = array.pop();
  while(next != undefined) {
    newArray.push(next);
    next = array.pop();
  }
  return newArray;
}

console.log(reverseArray([1,2,3,4]));

function reverseArrayInPlace() {
  for(let i = 0; i < this.length; i++) {
    let temp = this.pop();
    console.log(temp);
    this.push(temp);
  }
}

const testArr = [1,2,3,4];
testArr.reverseArrayInPlace();
console.log(testArr);
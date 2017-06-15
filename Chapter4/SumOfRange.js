function range(start, end) {
  let arr = [];
  while(start <= end) {
    arr.push(start);
    start += 1;
  }
  return arr;
}

console.log(range(1,10));

function sum(array) {
  let sum = 0;
  let next = 0;
  while(next != undefined) {
    sum = sum + next;
    next = array.shift();
  }
  return sum;
}

console.log(sum(range(1,10)));

function range(start, end, step) {
  if(arguments.length < 3) {
    let arr = [];
  while(start <= end) {
    arr.push(start);
    start += 1;
  }
  return arr;
  } else {
    let arr = [];
    if(step > 0) {
      while(start <= end) {
        arr.push(start);
        start += step;
      }
    } else {
      while(start >= end) {
        arr.push(start);
        start += step;
      }
    }
    return arr;
  }
}

  console.log(range(1,10,2));
  console.log(range(5,2,-1));
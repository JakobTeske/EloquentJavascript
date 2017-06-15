function arrayToList(array) {
  var list = {};
  let next = array.shift();
  while(next != undefined) {
    list = append(next, list);
    next = array.shift(); 
  }
  return list;
}

function prepend(element, list) {
  return {value: element, rest: list};
}

function append(element, list) {
  let next = list;
  while(next.rest != undefined) {
    next = next.rest;
  }
  next.rest = element;
  return list;
}

console.log(arrayToList([1,2,3]));
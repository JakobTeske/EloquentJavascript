function min(numberOne, numberTwo) {
    if(numberOne < numberTwo) {
        return numberOne;
    } else if (numberTwo < numberOne) {
        return numberTwo;
    } else {
        return numberOne;
    }
}

console.log(min(5,10));
console.log(min(14,10));
console.log(min(1,1));

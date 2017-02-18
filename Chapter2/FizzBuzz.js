//Variante A
var counter = 0;
while(counter < 100) {
    counter++;
    var output = "";
    if(counter % 3 == 0) {
        output  = "Fizz";
    } else if (counter % 5 == 0) {
        output = "Buzz";
    } else {
        output = counter;
    }
    console.log(output);
}

//Variante B
var counter = 0;
while(counter < 100) {
    counter++;
    var output = "";
    if(counter % 3 == 0 && counter % 5 == 0) {
        output  = "FizzBuzz";
    } else {
        output = counter;
    }
    console.log(output);
}
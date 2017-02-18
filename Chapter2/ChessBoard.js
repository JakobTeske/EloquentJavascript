var size = 8;
var lastChar = "";
var output = "";
for(var i=1; i <= size*size; i++) {
    if(lastChar == " ") {
        output = output + "#";
        lastChar = "#";
    } else {
       output = output + " ";
        lastChar = " ";
    }
    if (i % size == 0) {
        console.log(output);
        output = "";
    }
}
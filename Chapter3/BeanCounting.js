function countBs(word) {
    var count  = 0;
    for(var index = 0; index < word.length; index++) {
        if (word.charAt(index) == "B")
            count++;
    }
    return count;
}

console.log(countBs("Bob"));
console.log(countBs("HELLO"));
console.log(countBs("BoBBy"));
console.log(countBs("bear"));

function countChar(word, char) {
    var count  = 0;
    for(var index = 0; index < word.length; index++) {
        if (word.charAt(index) == char)
            count++;
    }
    return count;
}

console.log(countChar("Bob","B"));
console.log(countChar("HELLO","B"));
console.log(countChar("BoBBy","B"));
console.log(countChar("bear", "B"));
console.log(countChar("Hello","e"));




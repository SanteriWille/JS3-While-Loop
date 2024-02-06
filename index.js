// oppgave 1
/*
var i = 0;

while (i <= 50) {
    console.log(i);
    i++
}
*/

// oppgave 2
/*
var i = 0;

while (i <= 100) {
    console.log(i);
    i = i + 2;
}*/

//oppgave 3
/*
var i = 0;

while (i < 1000) {
    console.log(i);
    i = i + 3;
}*/

// oppgave 4
/*
var i = 1;

while (i <=1000) {
    if (i%3 == 0 && i%5 == 0) {
        console.log(i);
    }
    i++
}*/

// oppgave 5
/*
var total = 0;

var i = 0;

while (i <= 100) {
    total += i;
    i++;
}

console.log(total);*/

// oppgave 6
/*
let hashtag = '';
let i = 0;

while (i <= 4) {
    console.log(hashtag);
    hashtag += '#';
    i++;
}*/

// oppgave 7
/*
let hashtag = '';
let i = 0;

while (i <= 50) {
    console.log(hashtag);
    hashtag += '#';
    i++;
}*/

// oppgave 8

var i = 1;

while (i <=100) {
    if (i%3 == 0 && i%5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i%3 == 0) {
        console.log("Fizz");
    }
    else if (i%5 == 0) {
        console.log("Buzz");
    }
    else {console.log(i);
    }
    i++;
}


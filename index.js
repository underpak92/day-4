console.log("hallo dunia");

// variable
// var
// let
// const

// var bisa dideklarasikan ulang
var name = "budi"
var name = "faiq"

console.log(name);


// let kita tidak bisa deklarasi ulang
let food = "seblak"
food = "martabak"

// const tidak dapat di deklarasikan ulang dan tidak dapat diubah value nya
// const drink = "cincau"


// data tipe

// string - "tere liye"  | "bapak budi"
// number - 100 |100
// boolean - true | false

var school = "SMP Negri 7 Jakarta"  //string

var veggies = "kangkung"
var age = 24 //number

var isStudying = true

// console.log ("hai my name is ",name,"i like to eat",veggies);
// console.log(`hai, my name is ${name} i like to eat ${veggies}`);

// oprator
let x = 8.9
let y = 40.2

let result = x + y

// condition
// if-else if -else
let score = 70

if (score <= 60) {
    // console.log("maaf, kamu tidak lulus");
} else if (score < 70) {
    // console.log("sedikit lagi anda lulus");
} else {
    // console.log("selamat anda lulus");
}

// function
function Aritmatika () {
    let bilanganPertama = 50
    let bilangankedua = 70

    let result = bilanganPertama + bilangankedua

    console.log(result);
}

Aritmatika()

function Aritmatika2 (bilanganPertama, bilangankedua) {
    let result = bilanganPertama + bilanganPertama
    
    console.log(result)
}

Aritmatika2(40, 80)

function myName(name) {
    console.log(name);
}

myName("Farel")








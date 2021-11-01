console.log("Merhaba Kodlama.io")
    /*
    var dolarDun = 9.20
    dolarDun = "ABD"
    var dolarBugun = 9.30
    console.log(dolarDun)
    */

//console.log(dolarDun)
//var dolarDun = 9.20
/*
let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.10
}
console.log(dolarDun)
*/
/*
//const sabit tek bir değer alır değer değişikliklerinde hata verecektir.
const euroDun = 11.2
    //euroDun = 11
console.log(euroDun)
*/


let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]
console.log(konutKredileri)
let konutKredileri2 = [12, "Emlak Konut Kredisi", ["a", "b", "c"]]
console.log(konutKredileri2)

//sahte datalar için : https://jsonplaceholder.typicode.com/

//Döngüler

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")


System.import('src/function.js');
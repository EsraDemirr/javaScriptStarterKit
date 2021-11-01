function addToCart(quantity, productName = "Elma") {
    console.log("Sepete Eklendi : ürün : " + productName + " adet : " + quantity)
}

//addToCart()
//addToCart("Yumurta")
//addToCart("Karpuz")
addToCart(10)


let sayHello = () => {
    console.log("Hello World");
}

sayHello()

let sayHello2 = function() {
    console.log("Hello World");
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    console.log("Ürününüz: " + productName + "Kaç tane seçtiniz: " + quantity + "," + unitPrice);
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)


function addToCart3(product) {
    console.log("Ürün:" + product.productName + "Ürün adedi: " + product.quantity, "Fiyatı: " + product.unitPrice);
}

let product1 = { productName: "Elma ", unitPrice: "5", quantity: "10" }
addToCart3(product1)


let product2 = { productName: "Elma ", unitPrice: "5", quantity: "10" }
let product3 = { productName: "Elma ", unitPrice: "5", quantity: "10" }

//içindeki değerler değil adres ataması yapılmıştır.
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)



function addToCart4(products) {
    console.log(products);
}

let products = [
    { productName: "Elma ", unitPrice: "5", quantity: "10" },
    { productName: "Armut ", unitPrice: "5", quantity: "10" },
    { productName: "Karpuz ", unitPrice: "5", quantity: "10" }
]

addToCart4(products)


function add(number1, number2) {
    console.log(number1 + number2)

}

add(30, 20)


function add2(...numbers) { //rest operatorü nedir 3 noktalı hale
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        total = total + numbers[i]

    }
    console.log(total)


}

add2(20, 30, 40, 50)

let numbers = [30, 20, 10, 100, 500, 200, 15, 120, 600]
    //console.log(Math.max(numbers))//Math.max ayrı ayrı sayılarla çalıştığı için hata verecektir.
console.log(Math.max(...numbers))



let regions = ["İç Anadolu", "Marmara", "Karadeniz"]
console.log(regions[1])

//Yerine
/*
let [icAnadolu, marmara, karadeniz] = [
    "İç Anadolu",
    "Marmara",
    "Karadeniz"
]
console.log(icAnadolu)
console.log(marmara)
*/
//Obje kullanalım

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadoluSehirleri);



let newProductName, newUnitPrice, newQuantity

    ({ pruductName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity } = { pruductName: "Elma", unitPrice: 10, quantity: 5 })

console.log(newProductName)
console.log(newUnitPrice);
console.log(newQuantity);
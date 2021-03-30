"use strict";
let number1;
let name1;
let stringExample;
let boolExample;
let numberExample;
let unionStringNumber;
unionStringNumber = 5;
unionStringNumber = "5";
let springWeather;
stringExample = "Hello!";
//Type Inference
let number2 = 5;
let resaurant = {
    name: "McDonalds",
    dineIn: false,
    foodItems: ["hamburgers", "fries", "apple pie"],
};
resaurant.foodItems.forEach((item) => {
    console.log(item.toUpperCase());
});
/*
Create a function that takes 3 parameters for
buying or selling stock
-first parameter is the StockName
-second parameter is the Quantity
-third parameter is the Action - "buy-stock" or "sell-stock"
-example return  statement "You just bought 15 stocks of
Bank of America for
a total of $152"
*/
let stockName;
let qty;
let action;
function stockPlug(stockName, qty, action) {
    let total = Number(qty) * 15;
    let status = action === "sell-stock" ? "sold" : "bought";
    return `You just ${status} ${qty} shares of ${stockName} Stock for a total of $${total}`;
}
stockPlug("Bank of America", "15", "sell-stock");
// let weather = {
//     temp: 78,
//     cloudConditions: 'overcast',
//     next5dayTemps: [81, 74, 79, 81, 69],
// };
let weather = {
    temp: 78,
    cloudConditions: "sunny",
};
let cloudy;
console.log(weather.temp);

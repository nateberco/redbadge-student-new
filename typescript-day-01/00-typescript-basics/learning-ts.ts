let number1;
let name1;
let stringExample : string;
let boolExample : boolean;
let numberExample : number;
let unionStringNumber: number | string;
unionStringNumber = 5;
unionStringNumber = "5";
let springWeather: any; 
stringExample = "Hello!"

//Type Inference
let number2 = 5;


let resaurant = {
    name: "McDonalds",
    dineIn: false,
    foodItems: ["hamburgers", "fries", "apple pie"],
};

resaurant.foodItems.forEach( (item)=> {
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

let stockName : "Fibrogen";
    let qty : 1200;
    let action : "sell-stock";

function stockPlug(
    stockName : string, 
    qty : number | string, 
    action : "sell-stock"| "buy-stock"
) {
    let total = Number(qty) * 15
    let status = action ==="sell-stock" ? "sold" : "bought"

    return `You just ${status} ${qty} shares of ${stockName} Stock for a total of $${total}`
    
}

stockPlug("Bank of America", "15", "sell-stock");


interface IWeather{
    temp: number;
    cloudConditions: string;
    next5daysTemps?: number[]; // ? mark before : makes optional
}

// let weather = {
//     temp: 78,
//     cloudConditions: 'overcast',
//     next5dayTemps: [81, 74, 79, 81, 69],
// };

let weather: IWeather = {
    temp: 78,
    cloudConditions: "sunny",
    
}


let cloudy: IWeather
console.log(weather.temp)
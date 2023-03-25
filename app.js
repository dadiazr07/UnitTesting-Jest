// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
    //return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8;
    //return the dollar value
    return valueInPound;
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar,  fromDollarToYen, fromYenToPound}
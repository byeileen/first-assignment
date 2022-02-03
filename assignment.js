console.log('Running assignment...');

const transactions = require('./simple-transaction-data').data;

// Assignment 1:
const filterFunction = (data) => {
    return data.filter((transaction) => {
        // TODO
        const year = transaction.transaction_date.substring(0,4);
        if (transaction.credit_card_company == 'VISA' && transaction.price >= 50 && year >= 2015){
            return transaction;
        }
    });
}
console.log(filterFunction(transactions));

// Assignment 2:
const aboveAverageFunction = (data) => {
    let sum = 0;
    for (transaction of data){
        sum += Number(transaction.price)
    }

    const average = sum / data.length;
    console.log(sum);
    console.log(average);

    return data.map((transaction) => {
        if(transaction.price > average){
            transaction.isPriceAboveAverage = true;
        return transaction
    }else {
        transaction.isPriceAboveAverage = false;
        return transaction
    }
});
}
console.log(aboveAverageFunction(transactions));

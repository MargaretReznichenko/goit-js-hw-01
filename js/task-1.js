//Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забеспеченнядля відділу продажів.
//Оголосити функцію makeTransaction, яка очікує два параметри, значенння яких будуть задаватися під час її виклику
//quantity - перший параметр, число, що містить кількість замовленних дроїдів.
//pricePerDroid - другий параметр, число, що містить вартість одного дроїда.
//Доповни код функції, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів `You ordered <quantity> droids worth <totalPrice> credits!` де кількість <quantity> - це кількість замовлених,
//<totalPrice> - це загальна вартість замовленн, тобто вартість усіх замовленних дроїдів.




function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"





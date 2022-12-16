
const holidayDestination = (country, month) => {
    console.log(`Yay! I'm going on holiday to ${country} in ${month}. I can't wait.`)
}

holidayDestination("Spain", "June")

// Functions / Activity 2:

const sayHello = (myName, drink) => {
    console.log(`Hi ${myName}, would you like a ${drink}?`)
}

sayHello("Paul", "Vodka Chaser")

const inventory = (productCode, departmentName, quantity) => {
    console.log(`${quantity} of ${productCode} sold from ${departmentName} department, need to update stock by ${quantity}`)
}

inventory(412345, "baked goods", 65 )

const multiply = (num1, num2) => {
    return num1 * num2
}

console.log(multiply(2,5))


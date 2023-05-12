// Temperature in Kelvin
const kelvin = 293

// Temperature in Celsius (conversion from Kelvin)
const celsius = kelvin - 273

// Temperature in Farenheit (convert from Celsius)
// used Math.floor() method to round number to whole number
const farenheit = Math.floor(celsius * (9 / 5) + 32)

// Temperature in Newton Scale (convert from Celsius)
// Use Math.floor() method to round number to whole number
const newton = Math.floor(celsius * (33 / 100))

// Answers
console.log(`The temperature is ${kelvin} degrees Kelvin.`)
console.log(`The temperature is ${celsius} degrees Celsius.`)
console.log(`The temperature is ${farenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees Newton.`)

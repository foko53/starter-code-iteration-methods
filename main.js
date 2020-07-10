// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// Kata 1: Use the.filter() method
// Filter the users array to show only the users with an isActive property of true.
const isActive = users.filter(user => user.isActive === "true")

printKata(1, isActive)

//     Kata 2: Use the.map() method
// Map over the users array to show only the email addresses of the users.
const emailAddress = users.map(user => user.emailAddress === "email")

printKata(2, emailAddress)

//     Kata 3: Use the.some() method
// Check whether at least one user in the users array has a company property of "OVATION".
const Owner = users.some(user => user.company === "OVATION")

printKata(3, Owner)

//     Kata 4: Use the.find() method
// Find the first user in the array over the age of 38.
const age = users.find(user => user.firstuser > 38)

printKata(4, age)

// Kata 5: Use the.filter() and.find() methods
// Find the first user in the array over the age of 38 who is active.
const firstActiveOver38 = users
    .filter(user => user.isActive)
    .find(user => user.firstuser > 38)

printKata(5, firstActiveOver38)

//     Kata 6: Use the.filter() and.map() methods
// Show the balance of every user in the array from the "ZENCO" company.
const balance = users
    .filter(user => user.balance)
    .map(user => user.company === "ZENCO")

printKata(6, balance)

//     Kata 7: Use the.filter() method with .includes() and the.map() method
// Show the age of every user with the "fugiat" tag.
const userage = users
    .filter(user => user.age)
    .map(user => user.tag === users)
    .includes(user => user.userage === "fugiat")


printKata(7, userage)
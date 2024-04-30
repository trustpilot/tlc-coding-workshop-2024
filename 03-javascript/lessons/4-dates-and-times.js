console.log(`
// ========================================
// 4. Manipulating date and time in JavaScript
// ========================================`
);

let myDate = new Date();
myDate.setDate(myDate.getDate() + 1);
myDate.setHours(myDate.getHours() - 1);
// console.log(myDate);

const dateInString = "2024-03-25T10:30:00"; // Example date string in standard ISO 8601 format
myDate = new Date(Date.parse(dateInString));
// console.log(myDate);
const customDateInString = "25 of March 2024, 10:30"; // Example date string in custom format
myDate = moment(customDateInString, "DD of MMMM YYYY, HH:mm").toDate();

// console.log(myDate);
// console.log(`${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()}`);
// console.log(`${moment(myDate).toString("DD of MMMM YYYY, HH:mm")}`);

console.log(`
// ========================================
// 5. Using functions in JavaScript
// ========================================`
);


function traditionalFunction(a, b) {
    // console.log("this from traditionalFunction: ", this);
    // console.log("arguments from traditionalFunction: ", arguments);
    return a + b;
}
const arrowFunction = (a, b) => {
    // console.log("this from arrowFunction: ", this); can be different if used in a Class
    // console.log("arguments from arrowFunction: ", arguments);
    return a + b;
}
// console.log("traditionalFunction(1, 2) = ", traditionalFunction(1, 2));
// console.log("arrowFunction(1, 2) = ", arrowFunction(1, 2));


function PersonalSummaryDiv(name, age, height, film, hobbies) {
    const hobbiesString =`Your hobbies are <b>${hobbies.join(', ')}</b>`;
    const filmString =`Thank you for sharing that your favourite film is: <b>${film.name}</b>`;
    const divElement = document.createElement('div');
    divElement.innerHTML = `Hello ${name}, <b>${age}</b> years old and <b>${height}</b> feet tall. <br/> ${hobbiesString}. <br/> ${filmString}.`;
    return divElement;

}

// const rootElement = document.getElementById('root');
// rootElement.appendChild(PersonalSummaryDiv("Olga", 37, 5.8, films[3], ['reading', 'drawing']));
// rootElement.appendChild(PersonalSummaryDiv("Alex", 35, 7.8, films[1], ['computer games', 'jazz music']));

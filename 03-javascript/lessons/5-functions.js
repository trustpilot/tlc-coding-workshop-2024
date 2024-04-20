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


function PersonalSummaryDiv(name, age, height, genderOptionsObject, film, hobbies) {

    const chosenGenderOptions = Object.keys(genderOptionsObject).filter(key => genderOptionsObject[key]);
    const genderString =`Your gender is set as "<b>${chosenGenderOptions.join(', ')}.</b>"`;
    const hobbiesString =`Your hobbies are <b>${hobbies.join(', ')}</b>`;
    const filmString =`Thank you for sharing that your favourite film is: <b>${film.name}</b>`;
    const divElement = document.createElement('div');
    divElement.innerHTML = `Hello ${name}, <b>${age}</b> years old and <b>${height}</b> feet tall. <br/> ${genderString} <br/> ${hobbiesString}. <br/> ${filmString}.`;
    return divElement;

}

// const rootElement = document.getElementById('root');
// rootElement.appendChild(PersonalSummaryDiv("Olga", 37, 5.8, {female: true}, films[3], ['reading', 'drawing']));
// rootElement.appendChild(PersonalSummaryDiv("Alex", 35, 7.8, {male: true}, films[1], ['computer games', 'jazz music']));



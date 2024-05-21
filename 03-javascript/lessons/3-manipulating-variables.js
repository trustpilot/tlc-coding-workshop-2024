console.log(`
// ========================================
// 3. Manipulating variables in JavaScript
// ========================================`
);

// >> Note: Simple manipulations of variables 
userGender = 'female'; // from undefined to string
person.age = person.age + 5; // increaing value, from number to number
person.age += 2; // increaing value, from number to number
person.age++; // increaing value, from number to number
person.height--; // decreasing value, from number to number
// console.log(`${person.name}, ${userGender} age: ${person.age}, height: ${person.height}, heightOnHeels: ${person.height + 0.4}`);


// >> Note: Simple manipulations of arrays
person.hobbies = [...person.hobbies, 'reading'];
// console.log(person.hobbies);
person.hobbies.push('drawing');
// console.log(person.hobbies);
person.hobbies.unshift('travelling');
// console.log(person.hobbies);
person.hobbies.pop();
// console.log(person.hobbies);
person.hobbies.shift();
// console.log(person.hobbies);
person.favouriteFilm = films[3];

// >> Note: filter is a method to filter elements of the array based on the provided condition
const hobbiesCollectedFromUsersCleaned = hobbiesCollectedFromUsers.filter(
    hobby => typeof hobby === 'string' && allowedHobbies.includes(hobby))
// console.log(hobbiesCollectedFromUsersCleaned);

// >> Note: Getting the same result as filter by walking through the list of hobbies
let hobbiesCollectedFromUsersCleaned2 = [];
for (let i = 0; i < hobbiesCollectedFromUsers.length; i++) {
    const hobby = hobbiesCollectedFromUsers[i];
    if (typeof hobby === 'string' && allowedHobbies.includes(hobby)) {
        hobbiesCollectedFromUsersCleaned2.push(hobby);
    }
}
// console.log(hobbiesCollectedFromUsersCleaned2)


// >> Note: reduce is a method to reduce the array to a single value based on the provided function
const filmsRatingSum = films.reduce((total, film) => total + film.imdbScore, 0);
const filmsAverageRating = filmsRatingSum / films.length;
// console.log(`Using reduse method, filmsAverageRating = ${filmsAverageRating}`);

// >> Note: Getting the same result as reduce with forEach to get the average rating
let filmsRatingSum2 = 0;
let filmsCount = 0;
films.forEach(film => {
    filmsRatingSum2 += film.imdbScore;
    filmsCount++;
});
const filmsAverageRating2 = filmsRatingSum2 / filmsCount;
// console.log(`Using forEach, filmsAverageRating = ${filmsAverageRating2}`);

// >> Note: filmsCount is another way to get films.length 
// console.log(`films.length = ${films.length}, filmsCount = ${filmsCount}`);


// >> Note: map is a method to create a new array with modified elements of the original array
const adjustedFilms = films.map(film => ({name: film.name, score: film.imdbScore}));
// console.log(adjustedFilms);

// >> Note: Getting the same result as map by walking through the list of films and creating a new array
let adjustedFilms2 = [];
for (let i = 0; i < films.length; i++) {
    adjustedFilms2.push({name: films[i].name, score: films[i].imdbScore});
}
// console.log(adjustedFilms2);

// >> Note: Getting the same result as map by walking through the list of films and creating a new array
const adjustedFilms3 = films.forEach(film => ({name: film.name, score: film.imdbScore}));
console.log(adjustedFilms3);

// >> Note: sort is a method to sort elements of the array based on the provided function
const sortedFilms = films.sort((a, b) => b.imdbScore - a.imdbScore);
// >> Note: sorting algorithms are not trivial to replicate, so it's better to use sort method (https://www.geeksforgeeks.org/sorting-algorithms/)


// >> Note: helpfull methods when working with objects: keys, values and entries

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
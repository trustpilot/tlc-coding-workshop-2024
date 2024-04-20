console.log(`
// ========================================
// 3. Manipulating variables in JavaScript
// ========================================`
);


// console.log(`${person.age}, height: ${person.height}`);
person.age = person.age + 5;
person.age += 2;
person.age++;
person.height--;
// console.log(`${person.name}: ${person.age} years, height: ${person.height}, heightOnHeels: ${height + 0.4}`);


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

// filter
const hobbiesCollectedFromUsersCleaned = hobbiesCollectedFromUsers.filter(
    hobby => typeof hobby === 'string' && allowedHobbies.includes(hobby))
// console.log(hobbiesCollectedFromUsersCleaned);

// reduce
const filmsRatingSum = films.reduce((total, film) => total + film.imdbScore, 0);
const filmsAverageRating = filmsRatingSum / films.length;
// console.log(filmsAverageRating);

// sort
const sortedFilms = films.sort((a, b) => b.imdbScore - a.imdbScore);

// map
const sortedFilmsNames = sortedFilms.map(film => ({name: film.name, score: film.imdbScore}));
// console.log(sortedFilmsNames);

// Object.keys
// console.log(Object.keys(person));
// Object.values
// console.log(Object.values(person));
// Object.entries
// console.log(Object.entries(person));




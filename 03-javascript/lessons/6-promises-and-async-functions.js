console.log(`
// ========================================
// 6.1. Using Promises in JavaScript
// ========================================`
);

// for (let i = 0; i < 5; i++) {
//     new Promise((resolve, reject) => {
//         let test = Math.random();
//         test = parseFloat(test.toFixed(2));
//         if (test > 0.5) {
//             setTimeout(() => {
//                 resolve(`Success ${test} > 0.5`);
//             }, 300);
//         } else {
//             setTimeout(() => {
//                 reject(`Error ${test} <= 0.5`);
//             }, 200);
//         }
//     }).then((result) => {
//         console.log(result);
//     }).catch((error) => {
//         console.error(error);
//     });
// }


console.log(`
// ========================================
// 6.2. Using async functions in JavaScript
// ========================================`
);

function fetchSameFilms() {
    return fetch("./films.json").then(response => {
        return response.json()
    });
}

(async function() {
    async function fetchFilms() {
        const response = await fetch("./films.json");
        return await response.json();
    }

    const filmsData = await fetchFilms();
    const sameFilmsData = await fetchSameFilms();
    // console.log(`Got ${filmsData.length} films from fetchFilms and ${sameFilmsData.length} from fetchSameFilms`);
})();
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


// new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', "./awards.json", true);
//     xhr.onload = function () {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             resolve(JSON.parse(xhr.responseText));
//         } else {
//             reject(new Error('Request failed with status ' + xhr.status));
//         }
//     };
//     xhr.send();
// }).then((awardsData) => {
//     console.log(`Got ${Object.keys(awardsData).length} awards from Promise.`);
// }).catch((error) => {
//     console.error(error);
// });



console.log(`
// ========================================
// 6.2. Using async functions and await in JavaScript
// ========================================`
);

function fetchSameFilms() {
    return fetch("./awards.json").then(response => {
        return response.json()
    });
}

(async function() {
    async function fetchFilms() {
        const response = await fetch("./awards.json");
        return await response.json();
    }

    const sameAwardsData = await fetchFilms();
    const sameAwardsDataOnceMore = await fetchSameFilms();
    // console.log(`Got ${Object.keys(sameAwardsData).length} awards from fetchFilms and ${Object.keys(sameAwardsDataOnceMore).length} from fetchSameFilms`);
})();



console.log(`
// ========================================
// 6.3. Using external Axios libraries to fetch data in JavaScript
// ========================================`
);

//
// axios.get('./awards.json')
//     .then(function (response) {
//         console.log(`Got ${Object.keys(response.data).length} awards from Axios library.`);
//     })
//     .catch(function (error) {
//         console.error('Error fetching data:', error);
//     });
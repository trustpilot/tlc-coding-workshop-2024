console.log(`
// ========================================
// 6. Using Promises, await async functions and external library in JavaScript
// ========================================`
);

// >> Note: Promises are used to handle asynchronous operations in JavaScript
// >> Note: In this example we are creating 5 promises in a for-loop and resolve or reject them based on the random number, so the output will be different each time
// >> Note: We are using setTimeout() to simulate the delay in the operation
// >> Note: We are using .then() to handle the resolved promise and .catch() to handle the rejected promise based on a condition if a random number "test" will be > 0.5 

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



// >> Note: Most common way to use promises is to fetch data from the server or read files
// >> Note: in this function we are fetching data from the local file awards.json using method .fetch(), resolving the promise with the data, or rejecting with an error
function fetchAwards() {
    return fetch("./assets/awards.json")
    .then(response => {
        return response.json()
    }).catch(error => {
        return {error: `Error fetching data: ${error}`}
    }).finally(() => {
        console.log(`Done with fetchAwards`);
    });
}

// >> Note: in this function we are fetching data from the local file awards.json using method library axios, resolving the promise with the data, or rejecting with an error
function fetchAwardsWithAxios() {
    return axios.get('./assets/awards.json')
        .then(function (response) {
            console.log(`Got ${Object.keys(response.data).length} awards from Axios library.`);
            return response.json()
        })
        .catch(function (error) {
            return {error: `Error fetching data: ${error}`}
        }).finally(() => {
            console.log(`Done with fetchAwardsWithAxios`);
        });
}

// >> Note: Using fetch inside async function with await to fetch data from the server
(async function() {
    async function fetchAwardsWithAwait() {
        const response = await fetch("./assets/awards.json");
        return await response.json();
    }

    const awardsData = await fetchAwardsWithAwait();
    const sameAwardsData = await fetchAwards();
    const sameAwardsDataOnceMore = await fetchAwardsWithAxios();
    console.log(`Got ${Object.keys(awardsData).length} awards from fetchAwardsWithAwait(), ${Object.keys(sameAwardsData).length} awards from fetchAwards() and ${Object.keys(sameAwardsDataOnceMore).length} from fetchAwardsWithAxios()`);
})();




// >> Note: Using XMLHttpRequest to fetch data from the server
// >> Note: XMLHttpRequest is an older way to fetch data from the server, it's better to use fetch or Axios
new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "./assets/awards.json", true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.responseText));
        } else {
            reject(new Error('Request failed with status ' + xhr.status));
        }
    };
    xhr.send();
}).then((awardsData) => {
    console.log(`Got ${Object.keys(awardsData).length} awards from Promise.`);
}).catch((error) => {
    console.error(error);
});

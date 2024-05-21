console.log(`
// ========================================
// 1. Hello World in Console
// ========================================`
);


// >> Note: adding "Hello from 1-hello-world.js" to the page
document.getElementById('root').innerHTML = 'Hello team!';



// >> Note: Adding same to the page in 3 steps
// >> Note: First, creating variables for the existing root element
const rootElement = document.getElementById('root');

// >> Note: Second, creating a new h1 element and adding it to the root element
const titleElement = document.createElement('h1');
titleElement.textContent = 'Hello from 1-hello-world.js';
rootElement.appendChild(titleElement);

// >> Note: Third, creating a new h1 element and adding it to the root element
const paragraphElement = document.createElement('p');
paragraphElement.innerHTML = 'Thank you for participating in our <br/><b>learning session</b>';
rootElement.appendChild(paragraphElement);

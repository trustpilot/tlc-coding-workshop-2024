# Introduction

Hi! 👋

Welcome to the <b>Introduction to Websites</b> section.

This folder contains code for two simple websites. One uses just HTML and CSS (`just-html-css-website-example`), the other uses basic JavaScript as well as HTML and CSS (`simple-website-example`).


## Exercise

This exercise describes how to make a small edit to the website code contained in this repository.

1. Log in to your GitHub account
2. Go to the repository in GitHub: https://github.com/trustpilot/tlc-coding-workshop-2024
3. Click 'Fork' (you can see this button to the right of the repository name under the header section of GitHub).
4. You can change the repository name or leave it the same. Tick 'Copy the main branch only'. Click 'Create Fork'. This will create you a copy of the repository in your own GitHub account. 
5. In your copy of the repository, click 'Code' (the green button). 
6. Select the 'Codespaces' tab.
7. Click 'Create codespage on main' to create a new Codespace. This should open a new tab with a code editor in it.
8. Go to the extensions tab at the side and install 'Live Server'. This will allow you to view websites in Codespaces.
9. Open the `simple-website-example` folder. 
10. Open the `index.html` file.
11. Right click on the `index.html` file and click 'Open with Live Server'. It should show you the 01-introduction folder. Click through the files to open `index.html`. `01-introduction` > `simple-website-example`.
12. Go back to the code editor. Change the text in the `h1` tag to 'Hello World!'
13. Reload the webpage and the text at the top should change! 


### Backup Instructions

These are here in case Codespaces don't work.

1. Go to https://developer.mozilla.org/en-US/play
2. Copy the following bits of code into the relevant boxes then click run
   1. HTML
   ```html
      <body>
      <h1>Hello!</h1>

      <p>Welcome to my page!</p>

      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <button class="alert-button" onclick="showMessage()">Click here!</button>
      </body>  
   ```
   2. CSS

   ```css
   body {
      margin: 0 auto;
      max-width: 50em;
      font-family: "Helvetica", sans-serif;
      line-height: 1.5;
      padding: 1em 1em;
   }

   h1 {
     margin-top: 1%;
     padding-top: 1%;
   }

   button {
     background-color: #04aa6d;
     border: none;
     color: white;
     padding: 15px 32px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 16px;
     border-radius: 8px;
   }

   button:hover {
     box-shadow:
       0 12px 16px 0 rgba(108, 108, 108, 0.24),
       0 17px 50px 0 rgba(108, 108, 108, 0.24);
   }
   ```

   3. JavaScript

   ```js
   function showMessage() {
      console.log("Button clicked!");
   }
   ```

3. If you have time, see what you can change in the HTML or CSS to make the appearance of the webpage look different. For example, change the colour of some text by adding `color: red;` to the `h1` section in the CSS.



## Glossary

<b>HTML (HyperText Markup Language)</b> - the most basic building block of the Web. It defines the meaning and structure of web content ([source](https://developer.mozilla.org/en-US/docs/Web/HTML))

<b>CSS (Cascading Style Sheets)</b> - technology used to describe a web page's appearance/presentation ([source](https://developer.mozilla.org/en-US/docs/Web/HTML))

<b>Javascript</b> - a programming language, the most widely used language by websites as it is interpreted by the majority of browsers ([source](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/The_web_and_web_standards)) 

<b>Repository</b> - where we store code, essentially a set of organised files


## Links

[Mozilla Playground](https://developer.mozilla.org/en-US/play)

[Mozilla Learn Web Development Guide](https://developer.mozilla.org/en-US/docs/Learn)

[Codecademy](https://www.codecademy.com/)

[Programming with Mosh, HTML Tutorial (YouTube)](https://www.youtube.com/watch?v=qz0aGYrrlhU)

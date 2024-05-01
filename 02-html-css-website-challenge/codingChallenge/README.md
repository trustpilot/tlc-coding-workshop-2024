# build-your-first-website-challenge

This repo contains a challenge for practicing html &amp; CSS.

Welcome to the website building challenge.

You have been picked to create the website for an exciting new ai startup.

## Prerequisite

- Visual Studio Code (VSC)
- Live Server extension

Clone this repository into your Visual Studio Code instance.
This guide assumes that you are using VSC, but any editor will work.

## Viewing the files

The files of the repo are visible in the explorer area of your editor.
This section is visible on the lefthand side of the screen by default.

If you don't see the explorer area, try activating the explorer:
- click the top left icon called Explorer 
- use the shortcut shift+cmd+e

## Folder structure

- The example styles are located in the "styles" directory.
- The example html files are located in the "examples" directory.
- You will be working at the top level of the directory, commonly referred to as the root.

## Add Live Server

We will use an extension called Live Server to enable a feature called live reloading.
Live reloading reloads or refreshes the entire app when a file changes. 
For example, if you were four links deep into your navigation and saved a change, live reloading would restart the app and load the app back to the initial route.

Skip this step if you already have the extension.

- open the Extensions Marketplace by clicking the icon depicting four boxes (lowest top left by default) or using the shortcut shift+cmd+x
- this feature allows most of our code edits to be visibile directly in the browser.
- some changes, like editing references to external files, can cause the server to lose track of the changes.
- if this happens, restart the server.

## Add a new file
- bring your cursor above the root area of the explorer
- right click in the explorer area to open the context menu
- click new file
- enter the file name: index.html
- double click the file to open it in its own window

## Add the basic html structure
We will use a handy shortcut that is available by default. Make sure your blinking cursor is at the top of the page then follow these instructions.

- write a single exclamation mark: !
- press the TAB key on your keyboard (above caps-lock on my keyboard layout)
- take a sip of your coffe while the shortcut does the work
- save your work by pressing cmd+s or by navigating the top menu: File > Save.

If the command was successfull, your file will contain the following structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Let's try to open the file in our browser to see what we can find.


## Open the file in Live Server

A browser can access a website by visting the correct web address. This is how your users will open the html file you are about to create.
This address is commonly referrred to as an Uniform Resource Locator (URL).

- click the button saying "Go Live" in the lower right of the status bar to turn the server on/off.
- accept any security prompts that ask for permission to access the network.
- right-click on the file you want to open and select "Open with Live Server"

- It's common to get an error at this point: 
- If the error code is "ERR_SSL_PROTOCOL_ERROR" then your browser is trying to verify the existance of a signed security certificate (SSL) that we haven't added.
- The fix is to remove the s from the https prefix inside the url bar.
- Modern browsers might hide this section, try clicking in the url field to reveal it
- if it still doesn't show, just use the link below or write out the full:

URL to use as a dev without SSL to your local host:
```
http://127.0.0.1:5500/
```
Note the missing s after http.

- Without SSL a malicious user can read or edit the messages passed between the server and the client.
- As a web user, always make sure to visit pages with active SSL protection (visible by a lock beside the URL)
- While we are developing our page, it's OK to remove this protective layer.

## Adding classes

Visual Studio Code can sometimes infer what you want to do based on the context:
- put your cursor inside a tag
- press c
- press TAB
- class="" should replace your c

If this doesn't work, just type it out manually.


## Good luck!

And remember, The only failure is not trying.
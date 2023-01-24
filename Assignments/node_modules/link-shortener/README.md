## About
An easy to use Link shortener module. 
- Error handling, in detail explanation for every error that you could have
- Custom and Unique Link title's are possible to create/add to your shortened link 

## Installation 

Run this command in your terminal of your project
 ```
 npm i link-shortener
 ```           
## Functions  

`.Shorten([URL to shorten], [Optional Title for the shortened link])`

The **first parameter** of this function has to be the **URL that you would like to shorten**.   
If it isn't a valid URL or if you didn't enter a URL, you will see an error show up in the console.

The **second parameter** of this function can be left empty if you don't want a custom link title, if you want a custom title, you can enter a **string** as the second parameter.  
 To check if the title is taken by another user, you have to add a check in your code (example given below).

**Example of a custom link title:**
https://cutt.ly/CustomLink  

**Example of a random link title:**
https://cutt.ly/wXyH2

## Usage

```javascript
const Shortener = require('link-shortener')                                             // Require the module

const result = Shortener.Shorten('https://www.google.com', 'Google').then((res) => {    // Using the .Shorten() function

    if (typeof res === 'undefined') {                                                   // Checking if the title entered is taken
        console.log("The requested title is already taken.")
    } else {
        console.log(res)                                                                // If the title is not taken, the link will be logged
    }
    
})

```

## Issues 
We've tested it multiple times for issues, if you do find any issues feel free to create an issue in our github repository.

### Support me!
I would love to make more packages for the community, if you would like to help me out, and contribute to my work, do consider donating here: https://www.buymeacoffee.com//robertcodez





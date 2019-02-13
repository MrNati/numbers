"use strict";

// create dive element
let createDiv = document.createElement("div");
// set 'id' attritube inside div element 
createDiv.setAttribute("id", "demo");
// add div element to the DOM
document.body.appendChild(createDiv);

// create numbers 1 to 1000
for (let i = 1; i <= 1000; i++) {
    // get div by the id attribute
    let storeDiv = document.getElementById("demo");

    // create new paragraph
    let createParagraph = document.createElement("p");
    // add paragraph to div
    storeDiv.append(createParagraph);

    // make every tenth number bold
    if (i % 10 === 0) {
        let bold = document.createElement("b");
        createParagraph.append(bold);
        bold.append(i);
    // make every third number italics
    } else if (i % 3 === 0) {
        let italics = document.createElement("I");
        createParagraph.append(italics);
        italics.append(i);
    // display the rest of the numbers all the way to 1000
    } else {
        createParagraph.append(i);
    }
}
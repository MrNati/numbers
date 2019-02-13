let createDiv = document.createElement("div");
createDiv.setAttribute("id", "demo");
document.body.appendChild(createDiv);

for (let i = 1; i <= 1000; i++) {
    let storeDiv = document.getElementById("demo");

    let createParagraph = document.createElement("p");
    storeDiv.append(createParagraph);

    
    if (i % 10 === 0) {
        let bold = document.createElement("b");
        createParagraph.append(bold);
        bold.append(i);
    } else if (i % 3 === 0) {
        let italics = document.createElement("I");
        createParagraph.append(italics);
        italics.append(i);
    } else {
        createParagraph.append(i);
    }
}
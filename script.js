const container = document.querySelector("#container");
container.setAttribute(
    "style", "border: 1px solid black; display: inline-block;"
);

   

function oneLine () {
    const lineBox = document.createElement("div");
    lineBox.classList.add("line");
    lineBox.setAttribute("style", "display:flex;");         
container.appendChild(lineBox);



    for (let j=0; j<16; j++) { 
    const smallBox = document.createElement("div");
smallBox.setAttribute(
"style", "height: 20px; width: 20px; border: 1px solid red;");
lineBox.appendChild(smallBox);
}
};


function fullGrid () { 
    for (i=0; i<16; i++) {
        oneLine()
    }
}

fullGrid();


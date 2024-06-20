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
smallBox.addEventListener("mouseenter", enter);
lineBox.appendChild(smallBox);

}

};

function enter (event)  { 
    event.target.style.backgroundColor = "blue";
}; 

function fullGrid () { 
    for (i=0; i<16; i++) {
        oneLine();
    }
 } ;

fullGrid();



// const sampleBox = document.createElement("div");
// sampleBox.setAttribute("style", "height: 20px; width: 20px; border:1px solid green;");
// container.appendChild(sampleBox);
// sampleBox.addEventListener("mouseenter", clikidy)

// function clikidy (event) { 
//     event.target.style.backgroundColor = "blue";
// }

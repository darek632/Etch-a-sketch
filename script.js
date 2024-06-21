const container = document.querySelector("#container");
container.setAttribute(
    "style","border: 1px solid black; display: inline-block;height:640px;width: 640px;");

   

function oneLine () {
    let n=16;
    const lineBox = document.createElement("div");
    lineBox.classList.add("line");
    lineBox.setAttribute("style", "display:flex; flex: 1 1 100%; flex-wrap: wrap;");
    lineBox.style.height = "calc(100%/n)" ;     
container.appendChild(lineBox);



    for (let j=0; j<n; j++) { 
    const smallBox = document.createElement("div");
smallBox.setAttribute(
"style", "flex: 1 1 0;  aspect-ratio: 1/1;  box-sizing: border-box; border: 1px solid red;");
smallBox.addEventListener("mouseenter", enter);
lineBox.appendChild(smallBox);

}

};

function enter (event)  { 
    event.target.style.backgroundColor = "blue";
}; 

function fullGrid () { 
    let n = 16;
    for (i=0; i<n; i++) {
        oneLine();
    }
 } ;

 fullGrid();

function getGridSize() { 
    let input;

    while (input === '' || input === null || input === undefined || typeof input !== 'number'|| 0 < input < 100 ) { 
        input = prompt("Please enter a number to determine number of boxes per size",
            "Between 0 and 100");
       
    }

    return input;
}

    const userInput = getGridSize();


    




// if null/undefined or not a number betwenn 0 and 100 prompt again 
// else answer equals n in function fullGrid and n in function





// const sampleBox = document.createElement("div");
// sampleBox.setAttribute("style", "height: 20px; width: 20px; border:1px solid green;");
// container.appendChild(sampleBox);
// sampleBox.addEventListener("mouseenter", clikidy)

// function clikidy (event) { 
//     event.target.style.backgroundColor = "blue";
// }

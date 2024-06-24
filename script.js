const container = document.querySelector("#container");
container.setAttribute(
    "style","border: 1px solid black; display: inline-block;height:640px;width: 640px;");

    function updateGrid () { 

        let allLines= document.querySelectorAll(".line");
        allLines.forEach(line => line.remove());
        

    function grabInput () {
        let selection ;

        do  {

            selection = (prompt("Pick a number of boxes to have per side.","Between 0 and 100"));

            if (selection === null || selection === '') { 
                return null;
            }

            selection = Number(selection);
        }

        while (isNaN(selection) || selection <= 0 || selection > 100);

        return +selection;
    
        }

    
    
     let userInput = grabInput();
     console.log( userInput);

function oneLine () {
    let n=userInput; 
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
   let n = userInput;
    for (i=0; i<n; i++) {
        oneLine();
    }
 } ;

fullGrid();


 }

document.querySelector("#generator").addEventListener("click",updateGrid);


let iAmNull = null;
console.log(Number(iAmNull));

let iAmUndefined = undefined;
console.log(Number(iAmUndefined));
console.log(isNaN(iAmUndefined));

let iAmEmpty = '';
console.log(Number(iAmEmpty));

let iAmString = 'twetny is plenty diked';
console.log(Number(iAmString));


 // pseudo for button prompt
 // create button for generating number of squares per side
 // create function to ask user for input
 // input must be a value between 0 and 100 
 // if input null,undefined,empty string or NaN ask again.
 // use return value of prompt to be the 'n' in function oneLine
 // use return value of prompt to also be the 'n' in function fullGrid
 // 






// if null/undefined or not a number betwenn 0 and 100 prompt again 
// else answer equals n in function fullGrid and n in function





// const sampleBox = document.createElement("div");
// sampleBox.setAttribute("style", "height: 20px; width: 20px; border:1px solid green;");
// container.appendChild(sampleBox);
// sampleBox.addEventListener("mouseenter", clikidy)

// function clikidy (event) { 
//     event.target.style.backgroundColor = "blue";
// }

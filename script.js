let gridContainer = document.querySelector(".gridContainer");
let dimentionsButton = document.querySelector(".dimentions");
dimentionsButton.addEventListener("click", ()=> getUserInput());
let resetButton = document.querySelector(".reset");

let X;
getUserInput();

function getUserInput(){
   
    let numberOfSquares = prompt("Insert a number of squares that you would like to be in the box");
    if(numberOfSquares > 100){
        alert("You inputed more than 100 boxes in one row, that would be a problem loading up, so plz try a smaller number ");
        getUserInput();
    }
    else {
        createGrid(numberOfSquares);
    }
}

/////////////////////////////////
let isMouseDown = false;
gridContainer.addEventListener("mousedown", function(){
    isMouseDown = true;
})
gridContainer.addEventListener("mouseup", function(){
    isMouseDown = false;
})

function createGrid (X){ // X - dimentions
    let dimentions = X*X;
    


    
    for(let i = 0; i<dimentions; i++ ){

        const oneBox = document.createElement("div");
        oneBox.classList.add("box", "inividualBox"+i);
        oneBox.style.height = `${400 / X}px`;
        oneBox.style.width = `${400 / X}px`;
        gridContainer.appendChild(oneBox);
        oneBox.addEventListener("mouseover", function(){
            if(isMouseDown == true){
                if( oneBox.style.backgroundColor != "black"){
                    oneBox.style.backgroundColor = "black";
                }
            }
        });
        resetButton.addEventListener("click", function (){

            gridContainer.removeChild(oneBox);
        });

    }

       
}


const button= document.getElementById('gridSize');
const grid = document.getElementById('grid');

button.addEventListener('click', makeGridSize);

function makeGridSize(){
    var gridSize = prompt("what Grid size would you like. IE enter 16 for 16x16 grid.");
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 100px)`
    grid.style.gridTemplateRows = `repeat(${gridSize}, 100px)`
    gridSize = gridSize * gridSize;

    for(let i=0; i < gridSize; i++){
        var gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.id = i;
        gridItem.textContent = i;
        document.getElementById('grid').appendChild(gridItem);
    }
colorGrid()
    
}

function colorGrid(){
    gridItems = document.querySelectorAll(".grid-item");
    console.log(gridItems);
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', callId)
    });
}

function callId()
{
this.classList.add('clicked');
}
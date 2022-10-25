

for(let i=0; i < 256; i++){
    var gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.id = i;
    gridItem.textContent = i;
    document.getElementById('grid').appendChild(gridItem);
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((gridItem) => 
    gridItem.addEventListener('click', callId));
   
    function callId()
    {
    this.classList.add('clicked');
    }
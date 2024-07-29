const start_container = document.getElementById("start-container");
const button4 = document.getElementById("4x4");
const button6 = document.getElementById("6x6");
const start_button = document.getElementById("start-btn");
const tile_container = document.getElementById("tile-container");
const main_container = document.getElementById("main-container")
grid_count = null;
function ChooseGrid(value)
{
    grid_count = value;
    // console.log(grid_count)
    return grid_count;

}
function StartGame(){
    const main_container = document.getElementById("main-container")
    const start_container = document.getElementById("start-container");
    const tile_container = document.getElementById("tile-container");


    if(grid_count==null){
        alert("Please choose a grid size");
    }
    else{
        main_container.style.display="block";
        start_container.style.display="none";
        
        tile_container.style.gridTemplateColumns = `repeat(${grid_count}, 100px)`;
        // tile_container.style.gridTemplateRows = gridTemplateColumnsValue;        
        for(let i=0;i<grid_count*grid_count;i++)
        {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile_container.appendChild(tile)

        }
        
    }
}
const pastelColors = [
    "#FF6961",
    "#AEC6CF",
    "#77DD77",
    "#FDFD96",
    "#FFB347",
    "#CBAACB",
    "#FFD1DC",
    "#CFCFC4",
    "#A9A9A9",
    "#F8F8FF",
    "#D3D3D3",
    "#A7E9AF",
    "#FF9AA2",
    "#B2FBA5",
    "#C4AEAD",
    "#778899",
    "#C4DFAA",
    "#99C5C4"
  ];
  const coloPalette = [...pastelColors,...pastelColors];





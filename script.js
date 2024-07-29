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

    if(grid_count==null){
        alert("Please choose a grid size");
    }
    else{
        main_container.style.display="block";
        start_container.style.display="none"
    }
}



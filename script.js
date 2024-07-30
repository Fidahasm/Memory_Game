const start_container = document.getElementById("start-container");
const button4 = document.getElementById("4x4");
const button6 = document.getElementById("6x6");
const start_button = document.getElementById("start-btn");
const tile_container = document.getElementById("tile-container");
const main_container = document.getElementById("main-container")
grid_count = null;
const pastelColors6 = [
    "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#FFB533",
  "#33FFF5",
  "#A833FF",
  "#F5FF33",
  "#FF6F61",
  "#6B5B95",
  "#88B04B",
  "#F7CAC9",
  "#92A8D1",
  "#955251",
  "#B565A7",
  "#009B77",
  "#DD4124",
  "#45B8AC"
  ];
  const colorPalette6 = [...pastelColors6,...pastelColors6];
  const pastelColors4 = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#FFB533",
    "#33FFF5",
    "#A833FF",
    "#F5FF33"
  ];
  const colorPalette4 = [...pastelColors4,...pastelColors4];

  let revealCount = 0;
  let activeTile = null;
  let awaitingEndOfMove = false;

  
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
    else if(grid_count==4){
        main_container.style.display="block";
        start_container.style.display="none";
        
        tile_container.style.gridTemplateColumns = `repeat(${grid_count}, 100px)`;

        const count=  colorPalette4.length;
        for(let i=0;i<grid_count*grid_count;i++)
        {
            
            const randomIndex = Math.floor(Math.random()*colorPalette4.length);
            const color = colorPalette4[randomIndex];
            const tile = buildTile(color,count);
            colorPalette4.splice(randomIndex,1);
            tile_container.appendChild(tile);
        }
        

    }
    else{
        main_container.style.display="block";
        start_container.style.display="none";
        tile_container.style.gridTemplateColumns = `repeat(${grid_count}, 100px)`;

        const count = colorPalette6.length;
        for(let i=0;i<grid_count*grid_count;i++)
        {
            const randomIndex = Math.floor(Math.random()*colorPalette6.length);
            const color = colorPalette6[randomIndex];
            const tile = buildTile(color,count);
            colorPalette6.splice(randomIndex,1);
            tile_container.appendChild(tile);
        }
        
        
    }
}
var moves=0;

function buildTile(color,count){
    console.log(count)
    const element = document.createElement('div');
    element.classList.add('tile');
    element.setAttribute('data-color',color);
    element.setAttribute('revealed-data',"false");
    // const revealedColor = element.getAttribute('data-color');
   
    
    element.addEventListener('click',() =>{
        if(element.getAttribute('revealed-data') !="true"  && element!=activeTile){
            moves+=1;
            if(moves%2==0){
                document.getElementById('moves').innerHTML = moves/2;
            }
        }
        if (awaitingEndOfMove || element == activeTile||element.getAttribute('revealed-data') == "true"){
            return;
        }
        element.style.backgroundColor = color;
        if(!activeTile){
            activeTile=element;
            return;
        }
        const activeTileColor = activeTile.getAttribute('data-color')

        if( activeTileColor === color)
            {
            activeTile.setAttribute('revealed-data',"true");
            element.setAttribute('revealed-data',"true");
            awaitingEndOfMove = false;
            activeTile = null;
            revealCount+=2;
            if(revealCount === count)
            {
                alert("You won! Refresh and Play again.");
            }
            return;
        }
       
        awaitingEndOfMove = true;
        setTimeout(() =>{
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor =  null;
            activeTile = null;
            awaitingEndOfMove = false;
        },800);
        

    });
    return element;
   
}






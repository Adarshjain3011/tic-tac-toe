const boxes = document.querySelectorAll(".box");

const gameInfo =document.querySelector(".winnerInfo");

const newGameBtn =document.querySelector(".btn");

let curr_player;
let gameGrid;

let winnerinf = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6,]
]

gmIntial();
function gmIntial(){

    curr_player ="X";

    gameGrid =["","","","","","","","",""];

    gameInfo.innerText = `Player-turn - ${curr_player}`;

    newGameBtn.classList.remove("active");
    // to empty the tic tac toe -->

    boxes.forEach((box) => {

        box.innerText ="";
        box.classList.remove("win");
    
    });

}

boxes.forEach((box,index) => {


    box.addEventListener("click",()=>{

        check(index);

        CheckGameover();

    });

});

function check(index){

    if(gameGrid[index] ===""){

        gameGrid[index] = curr_player;

        boxes[index].innerText = curr_player;

        change_Turn(curr_player);

    }

}

function change_Turn(player){

    if(player === "X"){

        curr_player = "0";

    }

    else{

        curr_player = "X";

    }

    gameInfo.innerText = ` Player turn - ${curr_player}`;

}


function CheckGameover(){

    let winner ="";

    let tie  = 0;
    winnerinf.forEach((position) => {
        
        if(gameGrid[position[0]] !=="" && gameGrid[position[1]] !=="" && gameGrid[position[2]] !=="" ){


            if(gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]] === gameGrid[position[2]]){


                boxes.forEach(box => {
                    
                    box.style.pointerEvents ="none";

                });
                boxes[position[0]].classList.add("win");

                boxes[position[1]].classList.add("win");

                boxes[position[2]].classList.add("win");

                
                newGameBtn.classList.add("active");

                if(gameGrid[position[0]] === "X"){

                    winner +=gameGrid[position[0]];

                }


                else{

                    winner +=gameGrid[position[0]];

                }
                
            }
        }
    });

    if(winner !==""){

        gameInfo.innerText = `Player-won - ${winner}`;

    }

    gameGrid.forEach((game)=>{

        if(game !== ""){

            tie++;

        }
    })

    if(tie === 9){

        gameInfo.innerText = `Draw Match`;
        
    }
}

newGameBtn.addEventListener("click",gmIntial);
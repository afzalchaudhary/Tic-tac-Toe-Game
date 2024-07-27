let resetGame=document.querySelector("#resetbtn");
let newGame=document.querySelector("#newGame");
let boxex = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let hide=document.querySelector(".hide");

let trunX =true; //X ki Turn hai

const winPattern =[ // these are the winning pattern of the game
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

boxex.forEach(function(box){
    box.addEventListener("click" , ()=>{
        if(trunX==true){ // this is for is x is press only option is o that is why is else true or false
            box.innerText="X";
            box.style.color="black";
            trunX=false;
        }else{
            box.innerText="O"
            box.style.color="black";
            trunX=true;
        }
        checkWinner();
        box.disabled=true;  // this is for after tapping one x or o will not change to other in same box
    })
})

let disableBox = ()=>{ // after winning the game box will not work
    for(let box of boxex){
        box.disabled=true;
    }
}

let enableBox = ()=>{   // after disable we have to enable the box as new game
    for(let box of boxex){
        box.disabled=false;
        box.innerText="";
    }

}

const showWinner =  (winner) => { //this is funtion is we have to cALL 
    msg.innerText=`Congratulation Winner is : ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox(); //this is for after winning the game box not working untill we press new or reset btn
}

const checkWinner = () =>{
    for(let pattern of winPattern){
        // console.log([
        //     boxex[pattern[0]].innerText,
        //     boxex[pattern[1]].innerText,
        //     boxex[pattern[2]].innerText,
        // ]);
        let pos1val=boxex[pattern[0]].innerText; //for getting the all position this is pos1 
        let pos2val=boxex[pattern[1]].innerText; // this is 2 
        let pos3val=boxex[pattern[2]].innerText; // this is postion 3
        if(pos1val!="" && pos2val!="" && pos3val!=""){   //just checking if there is any empty or not 
            if(pos1val===pos2val && pos2val===pos3val){// is pos1 is match to 2 or 2 to 3 then show the winner 
                // console.log("Winner",pos1val);
                showWinner(pos1val); // make just this funntion for to show the pos1 is winner
            }
        }
    }
   
}

const resetBtn = () =>{
    trunX=true;
    msgContainer.classList.add("hide");
    enableBox();

}

resetGame.addEventListener("click",resetBtn);
newGame.addEventListener("click",resetBtn);



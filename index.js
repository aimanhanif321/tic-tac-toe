//acces all elements
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let para = document.querySelector("#msg");
let newbtn = document.querySelector("#newbtn");

//turn 
let turn1 = true;

//that is a winning pattern
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

//boxes disable finction
const disableboxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
//game reset function
const resetbtn = () => {
    turn1 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
//enable boxes function
const enableboxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}
//show winner
const showWinner = (winner) => {
  msg.innerHTML = `congratulation winner is , ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
}

//boxes clickable function;
boxes.forEach((box) => {
    box.addEventListener('click' ,() => {
    console.log("box was clicked")
    box.innerHTML = "X"
    if(turn1){
        box.innerHTML = "X"
        turn1 = false
    }else{
        box.innerHTML = "0"
        turn1 = true;
    }
    box.disabled = true
    checkWinner();
    })
});


//check who is a winner
const checkWinner =() =>{
    for(let pattern of winpattern){
        let position1 = boxes[pattern[0]].innerHTML;
        let position2 = boxes[pattern[1]].innerHTML;
        let position3 = boxes[pattern[2]].innerHTML;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3 ){
                console.log("winner", position1);
                disableboxes();
                showWinner(position1);
                
                
    }
   }
  }
};

newbtn.addEventListener("click", resetbtn);
reset.addEventListener("click", resetbtn);
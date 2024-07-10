let boxes =document.querySelectorAll('.box');
let resetBtn =document.querySelector('#rest-btn');
let newGamebtn =document.querySelector('#new_btn');
let msgContanier =document.querySelector('.msg-contanier');
let msg =document.querySelector('#msg');
let count =0;

let turnO = true;  // playerX ,playerY

const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

const resetGame =()=>{
  turnO=true;
  enableBoxes();
  msgContanier.classList.add('hide');
}

boxes.forEach((box)=>{
  box.addEventListener('click',()=>{
    if(turnO){
      box.innerText ="O";
      box.style.color="blue";
      turnO=false;
    }
    else{
      box.innerText ="X";
      box.style.color="red";
      turnO=true;
    }
    count++;
    box.disabled =true;
    
    checkWinner();
  });
});

const disabledBoxes = ()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enableBoxes = ()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

const showWinner = (winner)=>{
  msg.innerText =`Congratulations Winner is ${winner}`;
  msgContanier.classList.remove('hide');
  disabledBoxes();
};

const checkWinner = () =>{
  for(let patterns of winPatterns){
   let pos1Val = boxes[patterns[0]].innerText;
   let pos2Val = boxes[patterns[1]].innerText;
   let pos3Val = boxes[patterns[2]].innerText;

   if(pos1Val !="" && pos2Val !="" && pos3Val !="")
   {
    if(pos1Val === pos2Val && pos2Val === pos3Val){
      showWinner(pos1Val);
    }
   }
   if(count == 9)
   {
    msg.innerText =`No one is Winner`;
    msgContanier.classList.remove('hide');
   }
  }
  
};

newGamebtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);




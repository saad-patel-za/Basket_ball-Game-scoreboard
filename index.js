

let Score = document.getElementById("myScore")
let count = 0

function addone(){
    count +=1
    Score.textContent = count
}
function addtwo(){
    count +=2
    Score.textContent = count
}
function addthree(){
    count +=3
    Score.textContent = count
}
//////////////////////////////////////////////////////////
let Score_El = document.getElementById("score")
let count_el = 0

function add1(){
    count_el +=1
    Score_El.textContent = count_el
}
function add2(){
    count_el +=2
    Score_El.textContent = count_el
}
function add3(){
    count_el +=3
    Score_El.textContent = count_el
}
function newGame(){
    count = 0
    Score.textContent = 0
    count_el = 0 
    Score_El.textContent = 0
}
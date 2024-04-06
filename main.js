let colorDisplay = document.querySelector('#colorDisplay')//span za boju koja se pogadja
let colorBoxes = document.querySelector("#container");//glavni div sadrzi ostale bokseve
let message = document.querySelector('#message')
let button = document.querySelector("#reset");
let colors = randomColorBoxes();//array sa 4 random boje
let pickedColor = pickColor();

//funkcija koja daje random boju
function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

//funkcija koja pravi array sa 4 random boje
function randomColorBoxes(){
    let arr = [];
    for(let i = 0; i < 4 ; i++){
        arr.push(randomColor())
    }
    return arr;
}

//funkcija za biranje 1 boje za pogadjanje
function pickColor(){
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

//Pravimo boxeve
setUpColors();

function setUpColors(){
    colorBoxes.innerHTML="";
    colors = randomColorBoxes();
    pickedColor=pickColor();
   colorDisplay.innerHTML=pickedColor;
   colorDisplay.style.color='black'; 

    colors.forEach(color=>{
        let box = document.createElement("div");
        box.style.backgroundColor=color;
        box.className='colorBox';
        colorBoxes.appendChild(box);
        box.addEventListener("click",colorOnClick)
    });
    message.innerHTML="";

}

button.addEventListener("click",setUpColors)

function colorOnClick(){
    let clickedColor = this.style.backgroundColor;
    console.log(clickedColor);
    if(clickedColor===pickedColor){
       message.style.color='green';
       message.innerHTML='Pogodio si!!!'
        changeColors(clickedColor);
        colorDisplay.style.color=clickedColor;
        button.innerHTML='Igraj ponovo';

    }else{
        message.innerHTML = "Pokusaj ponovo";
        message.style.color='red';
        this.style.backgroundColor='transparent';
    }
}
//funkcija koja boji sve kutije u boju koja je random izabrana kada pogodimo boju
function changeColors(color){
    let boxes = document.querySelectorAll('.colorBox')
    for(let i =0;i<boxes.length;i++){
        boxes[i].style.backgroundColor=color;
    }
}


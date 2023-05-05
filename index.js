let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")
let btn6 = document.querySelector(".btn6")
let inp1 = document.querySelector(".inp1")


let hedding2 = document.getElementsByClassName("hedding2")
// console.log(hedding2);


// btn1.onclick = () => {  
//     let a = inp1.value
//     hedding2.innerHTML = a;
//     document.querySelector(".inp1").style.color = "red";
//     // document.getElementById(".inp1").style.textDecoration = "uppercase";  
//     // let html = document.getElementsByClassName("inp1").innerHTML;
//     // document.getElementsByClassName("hedding2").innerHTML === html;
// }

// btn2.onclick = () => {
//     document.querySelector(".inp1").style.color = "yellow";
//     document.getElementById(".inp1").style.textDecoration = "lowercase";
//     // btn1.style.text
// }

// btn3.onclick = () => {
//     document.querySelector(".inp1").style.color = "blue";
//     document.getElementById(".inp1").style.textDecoration = "capitalize";
//     // btn1.style.text
// }

// btn4.onclick = () => {
//     document.querySelector(".inp1").style.color = "black";
//     document.getElementById(".inp1").style.textDecoration = "bold";
//     // btn1.style.text
// }

// btn5.onclick = () => {
//     document.querySelector(".inp1").style.color = "white";
//     document.getElementById(".inp1").style.textDecoration = "initial";
//     // btn1.style.text
// }

// btn6.onclick = () => {
//     document.querySelector(".inp1").style.color = "orange";
//     document.getElementById(".inp1").style.textDecoration = "underline";
//     // btn1.style.text
// }

btn1.onclick = () => {
    let inpvalue = inp1.value
    hedding2.innerHTML = inpvalue.toUpperCase()
}

btn2.onclick = () => {
    let inpvalue = inp1.value
    hedding2.innerHTML = inpvalue.toLowerCase()
}
btn3.onclick = () => {
    let inpvalue = inp1.value
    let.innerHTML = inpvalue.slice(0, 1).toUpperCase()
    hedding2.innerHTML += inpvalue.slice(1).toLowerCase()
}

btn4.onclick = () => {
    let inpvalue = inp1.value
    hedding2.innerHTML = inpvalue.bold()
}
btn5.onclick = () => {
    let inpvalue = inp1.value
    hedding2.innerHTML = inpvalue.italics()
}

btn6.onclick = () => {
    let inpvalue = inp1.value
    hedding2.style.textDecoration = "underline"
    hedding2.innerHTML = inpvalue.toUpperCase().bold().italics()
}

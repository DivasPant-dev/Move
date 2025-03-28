"use strict";

let x = 0;
let y = 0;

const display = document.querySelector(".block");

function moveleft() {
    x -= 10;
    console.log("Moving left");
    display.style.transform = `translate(${x}px, ${y}px)`;
    const leftAudio = new Audio("./left.m4a");
    leftAudio.play();
}

function moveright() {
    x += 10;
    console.log("Moving right");
    display.style.transform = `translate(${x}px, ${y}px)`;
    const rightAudio = new Audio("./right.m4a");
    rightAudio.play();
}

function moveup() {
    y -= 10;
    console.log("Moving up");
    display.style.transform = `translate(${x}px, ${y}px)`;
    const upAudio = new Audio("./up.m4a");
    upAudio.play();
}

function movedown() {
    y += 10;
    console.log("Moving down");
    display.style.transform = `translate(${x}px, ${y}px)`;
    const downAudio = new Audio("./down.m4a");
    downAudio.play();
}

document.addEventListener("keypress", (event)=> {
    const keyTriggered = event.key;

    switch(keyTriggered) {
        case "w":
        case "W":
            moveup();
            break;
        case "a":
        case "A":
            moveleft();
            break;
        case "s":
        case "S":
            movedown();
            break;
        case "d":
        case "D":
            moveright();
            break;
    }
});
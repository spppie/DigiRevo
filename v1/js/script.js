"use strict";

const scanButton = document.querySelector("#scan-button");

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");

let d = 0;
let i = 0;
let x = 0;
let keepGoing = true;
function myTimer() {
    if (keepGoing === true) {
        console.clear();
        console.log(d, i, x);
        switch (d){
            case 0:case 1:case 2:case 3:case 4: p3.innerHTML = "O"; break;
            case 5:case 6:case 7:case 8:case 9: p3.innerHTML = "X"; break;
        }
        switch (i) {
            case 0: 
                p5.innerHTML = "&nbsp\\";
                break;
            case 1: 
                p5.innerHTML = "&nbsp&nbsp&nbsp\\";
                p4.innerHTML = "&nbsp\\";
                break;
            case 2: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp\\";
                p4.innerHTML = "&nbsp&nbsp\\";
                break;
            case 3: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp\\";
                p4.innerHTML = "&nbsp&nbsp&nbsp\\";
                p3.innerHTML = "&nbsp" + p3.innerHTML;
                break;
            case 4: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp\\";
                p3.innerHTML = "&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp\\";
                break;
            case 5: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp\\";
                p1.innerHTML = "&nbsp\\";
                break;
            case 6: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp\\";
                p1.innerHTML = "&nbsp&nbsp\\";
                break;
            case 7: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp\\";
                break;
            case 8: 
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                break;
            case 9:
                p5.innerHTML = "&nbsp&nbsp&nbsp&nbsp/";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                break;
            case 10:
                p5.innerHTML = "&nbsp&nbsp/";
                p4.innerHTML = "&nbsp&nbsp&nbsp&nbsp/";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                break;
            case 11: 
                p5.innerHTML = "&nbsp/";
                p4.innerHTML = "&nbsp&nbsp&nbsp/";
                p3.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                break;
            case 12: 
                p5.innerHTML = "/&nbsp";
                p4.innerHTML = "&nbsp/";
                p3.innerHTML = "&nbsp&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp&nbsp/";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                break;
            case 13: 
                p5.innerHTML = "/&nbsp&nbsp";
                p4.innerHTML = "/";
                p3.innerHTML = "&nbsp&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp&nbsp/";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp|";
                break;
            case 14: 
                p5.innerHTML = "/&nbsp&nbsp&nbsp";
                p4.innerHTML = "/&nbsp";
                p3.innerHTML = "&nbsp" + p3.innerHTML;
                p2.innerHTML = "&nbsp&nbsp/";
                p1.innerHTML = "&nbsp&nbsp&nbsp&nbsp/";
                break;
            case 15:
                p5.innerHTML = "/&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "/&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML;
                p2.innerHTML = "&nbsp/";
                p1.innerHTML = "&nbsp&nbsp&nbsp/";
                break;
            case 16:
                p5.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "/&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp";
                p2.innerHTML = "/&nbsp";
                p1.innerHTML = "&nbsp&nbsp/";
                break;
            case 17:
                p5.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "/&nbsp&nbsp&nbsp";
                p1.innerHTML = "&nbsp/";
                break;
            case 18:
                p5.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "/&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "/&nbsp&nbsp&nbsp";
                break;
            case 19: 
                p5.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "/&nbsp&nbsp&nbsp&nbsp";
                break;
            case 20: 
                p5.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                break;
            case 21:
                p5.innerHTML = "\\&nbsp&nbsp&nbsp&nbsp";
                p4.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                break;
            case 22:
                p5.innerHTML = "\\&nbsp&nbsp";
                p4.innerHTML = "\\&nbsp&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                break;
            case 23:
                p5.innerHTML = "\\&nbsp";
                p4.innerHTML = "\\&nbsp&nbsp&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp&nbsp";
                p2.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                break;
            case 24:
                p5.innerHTML = "|";
                p4.innerHTML = "\\&nbsp";
                p3.innerHTML = p3.innerHTML + "&nbsp&nbsp&nbsp";
                p2.innerHTML = "\\&nbsp&nbsp&nbsp&nbsp";
                p1.innerHTML = "|&nbsp&nbsp&nbsp&nbsp&nbsp";
                break;
            case 25:
                p5.innerHTML = "|";
                p4.innerHTML = "|";
                p3.innerHTML = p3.innerHTML + "&nbsp";
                p2.innerHTML = "\\&nbsp&nbsp&nbsp";
                p1.innerHTML = "\\&nbsp&nbsp&nbsp&nbsp&nbsp";
                break;
            case 26:
                p5.innerHTML = "|";
                p4.innerHTML = "|";
                p3.innerHTML = p3.innerHTML;
                p2.innerHTML = "\\&nbsp&nbsp";
                p1.innerHTML = "\\&nbsp&nbsp&nbsp&nbsp";
                break;
            case 27:
                p5.innerHTML = "|";
                p4.innerHTML = "|";
                p3.innerHTML = p3.innerHTML;
                p2.innerHTML = "\\&nbsp";
                p1.innerHTML = "\\&nbsp&nbsp&nbsp";
                break;
            case 28:
                p5.innerHTML = "|";
                p4.innerHTML = "|";
                p3.innerHTML = p3.innerHTML;
                p2.innerHTML = "|";
                p1.innerHTML = "\\&nbsp";
                break;
            case 29:
                p5.innerHTML = "|";
                p4.innerHTML = "|";
                p3.innerHTML = p3.innerHTML;
                p2.innerHTML = "|";
                p1.innerHTML = "|";
                break;
        }
        d++; i++; x++;
        if (d === 10) {
            d = 0;
        }
        if (i === 30) {
            i = 0;
        }
        if (x === 90) {
            keepGoing = false;
            x = 0;
        }
    } else {
        x = 0;
        scanButton.style.display = "inline-block";
        return;
    }
}
function scanFunction() {
    setInterval(myTimer,50);
    myTimer();
    clearInterval(myTimer);
    scanButton.style.display = "none";
}

scanButton.addEventListener("click", scanFunction);

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");
const div6 = document.querySelector("#div6");
const div7 = document.querySelector("#div7");
const positive1 = document.querySelector("#yes1");
const negative1 = document.querySelector("#no1");
const positive2 = document.querySelector("#yes2");
const negative2 = document.querySelector("#no2");
const positive3 = document.querySelector("#yes3");
const negative3 = document.querySelector("#no3");
const button1 = document.querySelector("#bttn1");
const button2 = document.querySelector("#bttn2");
const button3 = document.querySelector("#bttn3");
const button4 = document.querySelector("#bttn4");
const restart1 = document.querySelector("#reset1");
const restart2 = document.querySelector("#reset2");
const restart3 = document.querySelector("#reset3");
const cash = document.querySelector("#cash");
const card = document.querySelector("#card");
const check = document.querySelector("#check");
const crypto = document.querySelector("#crypto");


button1.onclick = function(){
    if(positive1.checked){
        div1.classList.add("hidediv");
        div2.classList.replace("hidediv", "showdiv");
    }
    else if(negative1.checked){
        div1.classList.add("hidediv");
        div4.classList.replace("hidediv", "showdiv");
    }
}

button2.onclick = function(){
    if(cash.checked || card.checked || check.checked || crypto.checked){
        div2.classList.replace("showdiv", "hidediv");
        div3.classList.replace("hidediv", "showdiv");
    }
}

button3.onclick = function(){
    if(positive2.checked){
        div4.classList.replace("showdiv", "hidediv");
        div2.classList.replace("hidediv", "showdiv");
    }
    else if(negative2.checked){
        div4.classList.replace("showdiv", "hidediv");
        div5.classList.replace("hidediv", "showdiv");
    }
}

button4.onclick = function(){
    if(positive3.checked){
        div5.classList.replace("showdiv", "hidediv");
        div7.classList.replace("hidediv", "showdiv");
    }
    else if(negative3.checked){
        div5.classList.replace("showdiv", "hidediv");
        div6.classList.replace("hidediv", "showdiv");
    }
}

restart1.onclick = function(){
    location.reload();
}

restart2.onclick = function(){
    location.reload();
}

restart3.onclick = function(){
    location.reload();
}
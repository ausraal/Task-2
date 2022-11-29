/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const button = document.querySelector(".btn"); 
let count = 0;
button.addEventListener ("click", () => { 
count += 1; 
let clicked = document.getElementById("btn__state"); 
clicked.innerText = count; 
//I have added here comments so file can be seen as updated
})

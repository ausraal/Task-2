/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const button = document.querySelector(".btn"); //access button
let count = 0;
button.addEventListener ("click", () => { //add event listener to button listening to clicks
count += 1; //adding to click sum after each click
let clicked = document.getElementById("btn__state"); //reaching "state" counting div
clicked.innerText = count; //presenting clicks in the "state"

})

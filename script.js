/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const button = document.querySelector(".btn"); //reach button which is being clicked
let count = 0;
button.addEventListener ("click", () => { //add event listener to that button
count += 1; //count clicks
let clicked = document.getElementById("btn__state"); 
clicked.innerText = count; //represent times clicked as output

})

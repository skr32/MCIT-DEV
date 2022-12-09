function Aufgabe1() {
    let eineZahl = 10
    console.log(eineZahl)
    eineZahl = 10
    console.log(eineZahl)
    eineZahl = eineZahl + 5
    console.log(eineZahl)
}

function Aufgabe2() {
    let einText = "Dust"
    console.log(einText)
    einText = "Ben " + einText
    console.log(einText)
}

function Aufgabe3() {
    let eineZahl = 20
    if(eineZahl<=15) {
        console.log("kleiner")
    }else{
        console.log("größer")
    }
}

function Aufgabe4() {
    let eineZahl = 20
    if(eineZahl<10 && (eineZahl%2 == 0)){
        console.log("Kleiner und Gerade")
    }else(console.log("Größer oder Ungerade"))
}

function Aufgabe5(){
    let input = document.getElementById("input").value
    console.log(input)
}

function Aufgabe6() {
    let eineZahl = document.getElementById("input").value
    console.log(eineZahl)
    eineZahl = 10
    console.log(eineZahl)
    eineZahl = eineZahl + 5
    console.log(eineZahl)
}

function Aufgabe7() {
    let einText = document.getElementById("input").value
    console.log(einText)
    einText = "Sascha " + einText
    console.log(einText)
}

function Aufgabe8() {
    let eineZahl = document.getElementById("input").value
    if(eineZahl<=15) {
        console.log("kleiner")
    }else{
        console.log("größer")
    }
}

function Aufgabe9() {
    let eineZahl = document.getElementById("input").value
    if(eineZahl<10 && (eineZahl%2 == 0)){
        console.log("Kleiner und Gerade")
    }else(console.log("Größer oder Ungerade"))
}

function Aufgabe10(){
    for (let index = 10; index <= 100; index++){
        console.log(index)
    }
}

function Aufgabe11(){
    for (let index = 100; index >= 10; index--){
        console.log(index)
    }
}

function Aufgabe12(){
    for (let index = 10; index <= 100; index=index+3){
        console.log(index)
    }
}

function Aufgabe13(){
    for (let index = 100; index >= 10; index=index-3){
        console.log(index)
    }
}

function Aufgabe14(){
    let index = 10
    while (index <= 100) {
        console.log(index)
        index++
    }
}

function Aufgabe15(){
    let index = 100
    while (index >= 10) {
        console.log(index)
        index--
    }
}

function Aufgabe16(){
    let index = 10
    while (index <= 100) {
        console.log(index)
        index = index + 3
    }
}

function Aufgabe17(){
    let index = 100
    while (index >= 10) {
        console.log(index)
        index = index - 3
    }
}

function Aufgabe18(){
    let arr = [1,2,3,4,5]
    for(let i = 0; i<=arr.length-1; i++){
        console.log(arr[i])
    }
}


function Aufgabe19(){
    let arr = [1,2,3,4,5]
    for(let i = arr.length-1; i>=0; i--){
        console.log(arr[i])
    }
}

function Aufgabe20(){
    let arr = []
    arr.push("Text1","Text2","Text3")
    console.log(arr.length)
    for(let i = 0; i<=arr.length-1; i++){
        console.log(arr[i])
    }
}

function Aufgabe21(){
    let arr = [
        ["Angela", "Merkel"],
        ["Arnold", "Schwarzenegger"],
        ["Tom", "Brady"]
    ]
    for(let i = 0; i<=arr.length-1; i++){
        console.log(arr[i][0] + " " + arr[i][1])
    }
}
/////////
function Aufgabe22(){
    let betrag = 100
    console.log(brutto(betrag))
}

function brutto (netto){
    return netto*1.2
}
//////////

function Aufgabe23(){
    let betrag = 100
    console.log(brutto1(betrag,19))
}

function brutto1 (netto, steuersatz) {

    return netto*((steuersatz/100)+1)
}
//////////

function Aufgabe24(){
    let betrag = document.getElementById("input").value
    console.log(brutto(betrag))
}

function Aufgabe25(){
    let betrag = document.getElementById("input").value
    console.log(brutto1(betrag,19))
}

function Aufgabe26(){
    document.getElementById("output").innerHTML = brutto1(100,19)
}

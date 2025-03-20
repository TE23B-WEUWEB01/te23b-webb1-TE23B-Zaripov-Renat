// // var dag = "fredag";
// // alert(dag);
// // console.log("Idag är det " + dag);

// // Var är du född?
// var stad = prompt("Var är du född?");
// console.log("Du är född i " + stad);

// // Vi gör en enkel captcha
// var gissning = prompt("Vad är 23 + 45?");
// if (gissning == 68) {
//     alert("Du är en människa");
// }   else {
//     alert("Du är en robot");
// }
// // Spamchek med två slumpade tal

// var slumptal1 = Math.round(Math.random() * 100);
// var slumptal2 = Math.round(Math.random() * 100);
// var facit = slumptal1 + slumptal2;

// // Fråga användaren vad är ?? + ??
// var gissning = prompt("Vad är " + slumptal1 + " + " + slumptal2 + "?");
// if (gissning == facit) {
//     document.writeln("<h1>Du är en männiksa! 😘</h1>");
// }   else {
//     document.writeln("<h1>Du är en robot! 💻</h1>");
// }


// Uppgift: skapa en miniräknare
// Läs in två tal
// Skriv ut valfri matematisk operation: + - / *
// var tal1 = prompt("Ange ett tal1");
// var tal2 = prompt("Ange ett tal2");
// var summa = Number(tal1) + Number(tal2);
// document.writeln("Summan är " + summa);

// Uppgift: skatteuträckning
// Läs in: inkomst, tex 30.000:-
// läs in: skatt, tex 30%
// Skriv ut: "Din inkomst efter skatt är xxx med yy% i skatt."
// var brutto = prompt("Vad är din lön före skatt?");
// var skatt = prompt("Vad är din skatt?")
// var inkomst = Number(brutto) * (100 - Number(skatt)) / 100;
// document.writeln("Din inkomst efter skatt är " + inkomst + " med " + skatt + "% i skatt. ");
// -----------------------------------------
// for (var i = 1; i < 11; i++) { 
//     document.write(i + "<br>");
//     }
// ---------------------------------------------
// var val = confirm(”Klicka OK för att fortsätta”);
// while (val) {

// val = confirm(”Klicka OK för att fortsätta”);

// }
// ---------------------------------------------
// var loop = true;
// var rättålder = 15;
// while(loop == true){
//     var svar = prompt("Hur gammal är du?")
//     if(svar >= rättålder){
//         alert("Grattis du får se filmen")
//         loop=false
//     }
//     else(alert("Du får inte se filmen"))
// }
// ----------------------------------------------
var loop = true;
while(loop = true) {
var input = prompt("hur många grader ute är det?")
if(input<20){
console.log("det är kallt ute")
document.write("det är kallt ute")
}
else if(input>20){
console.log("det är varmt")
document.write("det är varmt")
}

else{
console.log("du måste skriva en siffra")
}
}

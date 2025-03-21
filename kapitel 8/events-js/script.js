// while (true) {
//     let namn = prompt("Ange ditt namn:") // Popup-ruta att skriva i
//     let lösenord = prompt("Ange ditt lösenord:") // Popup-ruta att skriva i

// // Kontrollera att namn är alex och lösen är 12345
// if (namn == "alex" && lösenord == "12345") {
//     document.writeln("Hej Alex, du är inloggad!");
//     break;

// } else {
//     document.writeln("Fel uppgifter, VG försök igen.")
// }
// }
// let ålder = prompt("hur gammal är du");
// document.writeln(`Hej ${namn} du är ${ålder}`);

// Läs in ett heltal 10-50
// Skriv ut så många regler som heltalet i webbläsaren, tex:
// rad 1
// rad 2..
let heltal = parseInt(prompt("Skriv ett heltal 5-10:"));
for (let i = 1; i <= heltal; i++) {
    document.writeln(`rad ${i}<br>`);
}
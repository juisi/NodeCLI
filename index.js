console.log("running!");
// komentorivillä: "node inspect index.js" käynnistää node debuggerin joka oletuksena pysähtyy ensimmäiseen riviin.

//debugger;
const requirattuMerkkijono = require("./myscript.js");
console.log(require.cache);
// ylläoleva tuottaa Require Cache -objektiin avain/arvon : myscript.js : "moriens!"
console.log(requirattuMerkkijono);
// toinen require, joka viittaa jo kertaalleen ajettuun, viittaa requiren (ja tiedoston koodin) suorittamisen sijaan Require cacheen,
// ..josta allaolevan variablen arvo saadaan. Eli require ajetaan kerran per sama tiedostoviittaus ja sen jälkeen arvo tulee cachesta.
// sama exportin suhteen. export suoritetaan kertaalleen jonka jälkeen cache..
const requirattuSamaMerkkijono = require("./myscript.js");

// require cache object { exports: "moriens! tämä on merkkijono muuttujassa joka exportataan myscript.js:stä"}
// eli exports -propertyn arvo on suoraan exportattu merkkijono eikä esm exportatun muuttujan nimi.
console.log(requirattuSamaMerkkijono);

//"invisible function automatically wraps these resources into a "invible function" with the following variables..
// - that are related to the current index.js file"
/*console.log(exports);
console.log(module); // module.exports -object
console.log(arguments);
console.log(require); // function
console.log(__filename);
console.log(__dirname);
*/

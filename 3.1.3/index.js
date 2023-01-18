

/*
I denna övning ska du, steg för steg, 

skapa en funktion som returnerar ett objekt  som har en metod samt anropa funktionen så du kommer åt objektet och kan anropa dess metod.

Övningen går dock inte exakt i listans ordning, så var inte orolig.
Målet är att hjälpa dig minnas funktioner och dess returvärde samt 
få dig att jobba lite med metoder.

*/


/*
1)
Deklarera en funktion med namnet "clog".
Funktionen ska ta emot ett argument och logga det på consolen.
*/



/*
2)
Deklarera ett konstant objekt men namnet "o1".
Objektet har inga nycklar men har däremot en metod, med namnet m1.
Metoden ska vara samma funktion som clog
*/


/*
3)
Skapa en funktion med namnet "get_object".
Flytta deklarationen av "clog" och "o1" inuti get_objekt.
clog och o1 är då inte längre globala och kan inte nås annat än innanför get_objekt.

Funktionen get_object returnerar o1.
*/
function get_object () {

    function clog (what) {
    console.log(what);
    }

    const o1 = {
        m1: clog,
    }

    return o1;
}



/*
4)
Skriv en instruktion som använder sig av get_objekt för att logga "MAU" på consolen.
*/

get_object().m1("MAU");
var a = 0;
var b = 0; 
var c = 0; 
var d = 0;
var txt = "Oh hallo ik ben Jack. Wat leuk dat je naar mijn website kijkt.";
var txt2 = "Dat is een goede vraag, in dit school project was ik de Scrum-master, dat betekent niet dat ik de baas/leider was maar wel dat ik er voor moest zorgen dat iedereen aan het werk was en kon. Daarnaast was ik head developer dat betekent dat ik dus de meeste dingen heb geprogameerd. Voorbeelden van wat ik heb geprogammeerd zijn: het spelletje op de tv(de tv heb ik ook samen gesteld en de tv controller heb ik gesoldeerd), de lift en ook niet onbelangrijk is de ongeveer 90% van deze website(Luke heeft de overige 10% gedaan).";
var txt3 = "Het leukste was denk ik wel het maken en progameren van de tv. Want in dat proces heb ik een hele nieuwe progemeertaal geleerd(C++) en daar in een klein spelletje gemaakt ook vond ik het heel leuk om mijn eigen controller voor in de smart-studio te maken."
var txt4 = "In dit project heb ik veel geleerd maar de belangrijkste dingen die ik heb geleerd zijn toch wel de hele nieuwe progemeertaal c++ die ik special heb geleerd om de ardiuno(tv) te progamerem om een schermpje te ondersteunen een spelletja af te draaien en een lift besturen. Daarnaast heb ik ook nog veel geleerd over de verschillende progameertalen die ik heb gebruikt om deze website te maken."
var speed = 50;

function typeWriter() {
    if (a < txt.length) {
        document.getElementById("Its-me").innerHTML += txt.charAt(a);
        a++;
        setTimeout(typeWriter, speed);
    } 
    document.getElementById("Its-me-button").className = 'show';
}

function typeWriter2() {
    if (b < txt2.length) {
        document.getElementById("what-me").innerHTML += txt2.charAt(b);
        b++;
        setTimeout(typeWriter2, speed);
    }
    document.getElementById("what-me-button").className = 'show';
}

function typeWriter3() {
    if (c < txt3.length) {
        document.getElementById("fun-me").innerHTML += txt3.charAt(c);
        c++;
        setTimeout(typeWriter3, speed);
    }
    document.getElementById("learned-me-button").className = 'show';
}

function typeWriter4() {
    if (d < txt4.length) {
        document.getElementById("learned-me").innerHTML += txt4.charAt(d);
        d++;
        setTimeout(typeWriter4, speed);
    }
}
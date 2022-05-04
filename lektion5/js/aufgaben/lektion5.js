/**
 * Lektion 5: Schleifen
 */

/**
 * 1) Schreibe ein Array `artikelListe`, fülle es und geb es auf der Konsole mithilfe einer Schleife aus
 */
function artikelAuflisten() {
    // ToDo: füge ab hier deinen Code ein
    let artikelliste = ["Schokolade", "Kartoffel", "Nudeln", "Wasser", "Brot","Haferflocken", "Käse", "Kaffe" ];
        for (let i = 0; i  < artikelliste.length; i++){
            console.debug(artikelliste [i])
        }
}

/**
 * 2) Erstelle die Arrays `milchListe`, `gemüseListe` und `getreideListe`, fülle diese, füge sie der gruppenListe hinzu und
 * gebe sie auf der Konsole aus
 */
function allesAuflisten() {
    let gruppenliste = []

// ToDo: füge ab hier deinen Code ein
    let milchliste = ["Milch" , "Käse" , "Frischkäse" , "Mozarella"]
    let gemueseliste = ["Brokkoli","Zwiebeln","Salat"]
    let getreideliste = ["Haferflocken" , "Quinoa" , "Dinkel" , "Roggen"]
            gruppenliste.push(milchliste)
            gruppenliste.push(gemueseliste)
            gruppenliste.push(getreideliste)

    for (let i = 0; i  < gruppenliste.length; i++){
        console.debug("Gruppe " + i +":" + gruppenliste[i])

    }

}
/**
 * 3) Erstelle ein befülltes Array `gemueseListe`, entferne diese Elemente aus dem Array und gebe es vor und nach dem Entfernen
 * auf der Konsole aus
 */
function artikelEntfernen() {
    // ToDo: füge ab hier deinen Code ein

    let gemueseliste = ["Tomaten", "Gurke", "Paprika", "Aubergine", "Salat"]
    let gruppenliste = []
                gruppenliste.push(gemueseliste)

console.debug(gemueseliste)
}
/**
 * 4) Schreibe die Sortieren-Funktion
 */
function sortieren() {
    // ToDo: füge ab hier deinen Code ein
}

export {
    artikelAuflisten, allesAuflisten
}
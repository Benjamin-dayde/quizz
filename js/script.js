"use strict";
// Exemple d'utilisation de la méthode addEventListener()

var titre = document.getElementsByTagName("h1");
titre[0].addEventListener("mouseover", function (e) {
    // Code éxécuté lorsqu'un évènement "mouseover" survient sur l'élément 
    titre[0].style.color = "red";
});

var titre = document.getElementsByTagName("h1");
titre[0].addEventListener("mouseout", function (e) {
    // Code éxécuté lorsqu'un évènement "mouseout" survient sur l'élément 
    titre[0].style.color = "green";
});

let questions = document.getElementsByClassName("question");
let max = questions.length;
let points = 0;
let count = max;

for(let i = 0; i < max; i++) {

    questions[i].lastElementChild.addEventListener("submit", function (event) {
        // Pour stopper le comportement par défaut, et empêcher la page de se recharger
        event.preventDefault();
        
        let elems = document.getElementsByName('question-' + (i + 1));
        let max = elems.length;
        count--;

        // Pour chaque élément "input type radio" :
        for(let j = 0; j < max; j++) {
            // Lorsque l'utilisateur a validé, les réponses ne peuvent plus être modifiées
            // Les boutons radio sont donc désactivés
            elems[j].disabled = true;

            if(elems[j].checked && elems[j].value == 'true') {
                document.getElementById('question-' + (i + 1)).style.color = "green";
                elems[j].previousElementSibling.style.fontWeight = "bold";
                elems[j].previousElementSibling.style.fontSize = "1.1em";
                points++;
            } else if (elems[j].checked && elems[j].value == 'false') {
                document.getElementById('question-' + (i + 1)).style.color = "red";
                elems[j].previousElementSibling.style.fontWeight = "bold";
                elems[j].previousElementSibling.style.fontSize = "1.1em";
            }
        }
        checkEnd();
        
    });
}

function checkEnd() {

    if(count === 0) {
        let fin = document.getElementById("fin");
        let info = document.getElementById("info");
        info.innerHTML = "<span id=\"close\">&#x2716;</span>Vous avez répondu à toutes les questions<br>Votre score est de " + points + "/" + max ;
        fin.style.display = "block";
        document.getElementById("close").addEventListener('click', function (e) {
            e.target.parentElement.parentElement.style.display = "none";
        });
    }
}

// Questions structurées :

let question1 = {
    id: 1,
    intitule: "Un acouphène est une sensation qui affecte quel organe ?",
    reponses: [
        { id: 1, label: "Oeil", value: false },
        { id: 2, label: "Bouche", value: false },
        { id: 3, label: "Oreille", value: true },
        { id: 4, label: "Nez", value: false }
    ]
}

let question2 = {
    id: 2,
    intitule: "La mère de Lucie a trois enfants, ces deux premières filles se nomment Marie et Anna. Comment s'appelle son troisième enfant ?",
    reponses: [
        { id: 1, label: "Lucie", value: true },
        { id: 2, label: "Delphine", value: false },
        { id: 3, label: "Jaqueline", value: false },
        { id: 4, label: "On ne l'appelle pas on la siffle", value: false }
    ]
}

let question3 = {
    id: 3,
    intitule: "Combien y a t'il de lettres dans l'alphabet cyrillique ?",
    reponses: [
        { id: 1, label: 30, value: true },
        { id: 2, label: 300, value: false },
        { id: 3, label: 60, value: false },
        { id: 4, label: 2, value: false }
    ]
}

let question4 = {
    id: 4,
    intitule: "Quelle est la monnaie du Brésil ?",
    reponses: [
        { id: 1, label: "Le réal", value: false },
        { id: 2, label: "L'escudo", value: true },
        { id: 3, label: "Le dollar brésilien", value: false },
        { id: 4, label: "Le franc Suisse", value: false }
    ]
}

let lst_questions = [question1, question2, question3, question4];
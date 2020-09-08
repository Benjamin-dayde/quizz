// let question1 = {
//     id: 1,
//     intitule: "Un acouphène est une sensation qui affecte quel organe ?",
//     reponses: [
//         { id: 1, label: "Oeil", value: false },
//         { id: 2, label: "Bouche", value: false },
//         { id: 3, label: "Oreille", value: true },
//         { id: 4, label: "Nez", value: false }
//     ]
// }

// let question2 = {
//     id: 2,
//     intitule: "La mère de Lucie a trois enfants, ces deux premières filles se nomment Marie et Anna. Comment s'appelle son troisième enfant ?",
//     reponses: [
//         { id: 1, label: "Lucie", value: true },
//         { id: 2, label: "Delphine", value: false },
//         { id: 3, label: "Jaqueline", value: false },
//         { id: 4, label: "On ne l'appelle pas on la siffle", value: false }
//     ]
// }

// let question3 = {
//     id: 3,
//     intitule: "Combien y a t'il de lettres dans l'alphabet cyrillique ?",
//     reponses: [
//         { id: 1, label: 30, value: true },
//         { id: 2, label: 300, value: false },
//         { id: 3, label: 60, value: false },
//         { id: 4, label: 2, value: false }
//     ]
// }

// let question4 = {
//     id: 4,
//     intitule: "Quelle est la monnaie du Brésil ?",
//     reponses: [
//         { id: 1, label: "Le réal", value: false },
//         { id: 2, label: "L'escudo", value: true },
//         { id: 3, label: "Le dollar brésilien", value: false },
//         { id: 4, label: "Le franc Suisse", value: false }
//     ]
// }

// // -----------------------------------------------------------------

// let lst_questions = [question1, question2, question3, question4];

// 1. Accéder et afficher en console l'intitulé de la première question.
//console.log(lst_questions[0].intitule);

// 2. Accéder et afficher en console tous les intitulé de toutes les questions.
// for(let question of lst_questions) {
//     console.log(question.intitule);
// }

// let max = lst_questions.length;
// for(let i = 0; i < max; i++) {
//     console.log(lst_questions[i].intitule);
// }


// 3. Afficher en console, en dessous des intitulés, toutes les réponses de la question.
// for(let question of lst_questions) {
//     console.log(question.intitule);

//     for(let reponse of question.reponses) {
//         console.log(reponse.label);
//     }
// }

// let max = lst_questions.length;
// for(let i = 0; i < max; i++) {
//     console.log(lst_questions[i].intitule);

//     let max2 = lst_questions[i].reponses.length;
//     for(let j = 0; j < max2; j++) {
//         console.log(lst_questions[i].reponses[j].label);
//     }
// }

// 4. Afficher en console, en plus des intitulés, toutes les BONNES réponses des questions.
// for(let question of lst_questions) {
//     console.log(question.intitule);

//     for(let reponse of question.reponses) {
//         if(reponse.value == true) {
//             console.log(reponse.label);
//         }
//     }
// }

// let max = lst_questions.length;
// for(let i = 0; i < max; i++) {
//     console.log(lst_questions[i].intitule);

//     let max2 = lst_questions[i].reponses.length;
//     for(let j = 0; j < max2; j++) {
//         if(lst_questions[i].reponses[j].value == true) {
//             console.log(lst_questions[i].reponses[j].label);
//         }
//     }
// }

// 5. A partir de la récupération des intitulés de toutes les questions, construire une liste (ul) HTML et l'afficher en console.

// let liste = "<ul>";
// for(let question of lst_questions) {
//     liste += "<li>" + question.intitule + "</li>";
// }

// liste += "</ul>";

// console.log(liste);

// 6. Insérer cette liste dans votre document HTML (en ayant auparavant prévu un élément d'accueil)

// let elem = document.getElementById("liste");
// elem.innerHTML = liste;

// 7. Recréer, sur ce modèle, l'ensemble du html responsable de l'affichege des questions


// ------------ CONNEXION -------------
function getRequest() {
    
    //Récupère la connexion au serveur http
    let request;
    if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
          request = new ActiveXObject("Msxml2.XMLHTTP"); // IE version > 5
        } catch (e) {
          request = new ActiveXObject("Microsoft.XMLHTTP");
        }
    } else {
        request = false;
    }
    return request;
}

let request = getRequest();

request.open('POST', "index.php?route=questionnaire");
request.setRequestHeader('Content-Type', 'application/x-www-form-url-urlencoded');
request.send();
request.onreadystatechange = (function () {
    if(request.readyState == 4 && request.status == 200) {
        
        let datas = JSON.parse(request.response);

        let liste = "";
        for(let question of datas) {
        liste += "<div class='question' id='question-"+ question.id + "'>";
        liste += "<p>" + question.intitule + "</p>";
        liste += "<form action='#' method='POST'><div class='reponses'>";

        for(let reponse of question.reponses) {
            liste += "<label for='quest" + question.id + "-rep" + reponse.id + "'>" + reponse.label + "</label>";
            liste += "<input type='radio' name='question-" + question.id + "' value='" + reponse.value + "' id='quest" + question.id + "-rep" + reponse.id + "'>";
        }

        liste += "</div><input type='submit' value='Valider ma réponse'></form></div>";
    }

    let elem = document.getElementById("liste");
    elem.innerHTML = liste;

    

    };
});

console.log(request.response);
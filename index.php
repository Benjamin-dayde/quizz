<?php

$route = isset($_REQUEST['route'])? $_REQUEST['route'] : "home";
//$service = isset($_REQUEST['service'])? $_REQUEST['service'] : "default";

spl_autoload_register(function ($class) {
    if(file_exists("models/$class.php")) {
        require_once "models/$class.php";
    } 
});
// Routage

switch($route) {
    case "home" : $view = showHome();
break;
    case "forms" : $view = showForms();
break;
    case "insert_user" : insertUser();
break;
    default : $view = showHome();
}

// switch($service) {
//     case "questionnaire" : sendQuestion();
//     break;
//     default : $view = showHome();
// }

// Fonctions de controle

function showHome() {
    $data = [];
    $question= new Question();
    $data['question'] = $question->selectAll();

    return ["template" => "views/home.php"];
}

function showForms() {
    $data = [];
    return ["template" => "views/user_forms.php", $data];
}

function sendQuestion() {

    // sleep(3);

    $question = new Question();
    $retour = $question->selectAll();
    
    foreach($retour as &$question){
        $reponse = new Reponse();
        $reponse->setIdQuestion($question["id"]);
        $question["reponses"] = $reponse->selectByIdQuestion();
    }

    $json  = json_encode($retour);

    
    exit;
}

function insertUser() {

    var_dump($_REQUEST);

    $utilisateur = new Utilisateur();
    $utilisateur->setPseudo($_POST['pseudo']);
    $utilisateur->setPasswd(password_hash($_POST['passwd'], PASSWORD_DEFAULT));
    $utilisateur->insert();

    if($utilisateur->insert()) {
        echo "l'utilisateur a bien été enregistré";
    } else {
        echo " il y a eu un problème";
    }

    
    exit;

}



// Template maître
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Quizz </title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

    <?php require($view['template']) ?>

    
    
</body>
</html>
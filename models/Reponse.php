<?php

class Reponse extends DbConnect {

    private $id;
    private $label;
    private $value;
    private $idQuestion;

    function __construct() {
        parent::__construct();
        // Permet de pouvoir "surcharger" une méthode = ajouter des instructions spécifiques pour la classe fille
    }

    function selectByIdQuestion() {

        $query = "SELECT id, label, value, id_question FROM reponses WHERE id_question = :id";
        $result = $this->pdo->prepare($query);
        $result->bindValue('id', $this->idQuestion, PDO::PARAM_INT);
        $result->execute();
        return $result->fetchAll();
    }

    function setIdQuestion(int $id) {
        $this->idQuestion = $id;
    }
    
}
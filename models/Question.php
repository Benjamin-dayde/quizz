<?php

class Question extends DbConnect {

    private $id;
    private $intitule;

    function __construct() {
        parent::__construct();
        // Permet de pouvoir "surcharger" une méthode = ajouter des instructions spécifiques pour la classe fille
    }

    function selectAll() {

        $query = "SELECT id, intitule FROM questions";
        $result = $this->pdo->prepare($query);
        $result->execute();
        $datas = $result->fetchAll();

        return $datas;
    }

    function getId():int {
        return $this->id;
    }
}
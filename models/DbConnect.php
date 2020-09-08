<?php

abstract class DbConnect {

    protected $pdo;

    function __construct() {
        // On passe pour le moment sur la sécurisation des informations de connexion
        $this->pdo = new PDO('mysql:host=localhost;port=3306;dbname=quizz;charset=utf8', 'root', '');
    }

    
}
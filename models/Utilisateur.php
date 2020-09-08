<?php

class Utilisateur extends DbConnect {

    private $id_utilisateur;
    private $pseudo;
    private $passwd;


    function setPseudo($pseudo) {
        $this->pseudo = $pseudo;
    }

    function setPasswd($passwd) {
        $this->passwd = $passwd;
    }

    function setId_utilisateur($id_utilisateur) {
        $this->id_utilisateur = $id_utilisateur;
    }

    function insert() {
        
        $query = "INSERT INTO utilisateur (pseudo, passwd) VALUES (:pseudo, :passwd)";
        $preparedQuery = $this->pdo->prepare($query);
        $preparedQuery->bindValue("pseudo", $this->pseudo, PDO::PARAM_STR);
        $preparedQuery->bindValue("passwd", $this->passwd, PDO::PARAM_STR);
        return $preparedQuery->execute();

    }

}
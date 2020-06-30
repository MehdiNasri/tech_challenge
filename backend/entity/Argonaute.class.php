<?php 

include_once "Singleton.class.php";

class Argonaute {
    private $_name;
    public function __construct($name)
    {
        $this->_name = $name;
    }

    public function addArgaunote(){
        $dbi = Singleton::getInstance();
        $db=$dbi->getConnection();
        $query = $db->prepare("INSERT INTO argonaute (name) VALUES (:name)");
        $response = $query->execute(array(
            'name' => $this->_name,
        ));
        return $response;
    }

    public function readArgonaute(){
        $dbi = Singleton::getInstance();
        $db=$dbi->getConnection();
        $query = $db->query("SELECT name from argonaute ORDER BY id");
        $result = $query->fetchall(PDO::FETCH_ASSOC);
        return $result;
    }

    /**
     * Get the value of _name
     */ 
    public function get_name()
    {
        return $this->_name;
    }

    /**
     * Set the value of _name
     *
     * @return  self
     */ 
    public function set_name($_name)
    {
        $this->_name = $_name;

        return $this;
    }
}
?>
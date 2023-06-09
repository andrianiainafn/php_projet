<?php
   header('Access-Control-Allow-Origin: http://localhost:3000');
   header('Access-Control-Allow-Headers: Content-Type');
   header('Access-Control-Allow-Credentials: true');
   header('Access-Control-Allow-Methods: *');

   require('../ConnectToDb.php');

   $connect = new ConnectToDb();
   $pdo = $connect->connect();
   try{
    $path = explode('/',$_SERVER['REQUEST_URI']);
    if(isset($path[3])){
        $query = "SELECT e.num_etudiant,e.nom,e.prenom FROM etudiant e JOIN examen x ON e.num_etudiant = x.num_etudiant ORDER BY x.note";
        $stmt = $pdo->prepare($query);
        if($stmt->execute()){
            $student = $stmt->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($student);
        }
    }
   }catch(\Exception $e){
    echo "Echo" . $e->getMessage();
   }
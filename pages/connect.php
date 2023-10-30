<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    $First_name = $_POST["Fname"]; 
    $age = $_POST['age']; 
    $Last_name = $_POST['Lname']
    $Tax_baracket = $_POST['Tax bracket']
    $ship_status = $_POST['relationship status']
    $mortgage = $_POST['mortgage']
  
    $myPDO = new PDO(sqlite: Database.db)

    $sql = 'INSERT INTO account_info(Full_Name, First_Name, Age)'. 'VALUES(:Full_Name, :First_name, :Age )';

    $stmt = $this->pdo->prepare($sql);
    $stmt->execute([
    ':Full_Name' => "{$First_name} {$Last_name}"
    ':First_Name' => $First_name
    ':Age' => $age
    ]);

  } 


?>
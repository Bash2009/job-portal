<?php


$host = "localhost";
$db_username = "root";
$db_passkey = "";
$dbname = "job_portal";
$conn = new mysqli($host, $db_username, $db_passkey, $dbname);
if($conn->connect_error){
  die("Connection error:". $conn->connect_error);
}
$sql = "
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    country TEXT,
    address VARCHAR(100),
    education TEXT,
    skills VARCHAR(255),
    phone INT,
    gender TEXT,
    age_range VARCHAR(25),
    bio VARCHAR(500)
);";
if ($conn->multi_query($sql)) {
    do {
        // Store first result set
        if ($result = $conn->store_result()) {
            // Free result set
            $result->free();
        }
        // If there are more queries, prepare the next result
    } while ($conn->more_results() && $conn->next_result());
} else {
    die("Error executing multi_query: " . $conn->error);
}


?>
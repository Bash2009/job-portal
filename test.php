
<?php
if($_SERVER["REQUEST_METHOD"] === "POST"){
    $username = $_POST["user"];
    $password = $_POST["password"];

    echo $username;
    echo $password;

    $file = fopen('data.txt','a');
      fwrite($file,$username);
      echo "<br>";
      fwrite($file,$password);

    fclose($file);
}

?>


<form method="POST"> 
    <input type="text" placeholder="username" name="user">
    <br>
    <input type="password" placeholder="password" name="password">
    <br>
    <input type="submit">
</form>

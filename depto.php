<?php

// print_r($_POST);

if(!$_POST){
  header('Location: http://localhost/depto2/depto.html');
}

$nombre = $_POST['nombre'];

echo 'Hola, ' . $nombre ;

 ?>

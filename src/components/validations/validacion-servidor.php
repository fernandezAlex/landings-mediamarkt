<?php
$usuario = $_POST[datos];
echo "$usuario";
die();
// function guardarUsuario($usuario){

//   $bd = obtenerConexion();
//   $sentencia = $bd->prepare("INSERT INTO users(nombre, lastname, calificacion) VALUES (?, ?, ?)");
//   return $sentencia->execute([$usuario->nombre, $usuario->lastname, $usuario->calificacion]);

// }

// $resultado = guardarUsuario($usuario);
echo json_encode($usuario);
?>

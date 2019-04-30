<?php
$nombre_usuario=$_POST['nombre'];
$email_usuario=$_POST['correo'];
$consulta_usuario=$_POST['consulta'];

$$destino="marcsanuy@gmail.com";

$asunto="Consulta enviada desde Marc Sanuy Design";

$mensaje="Nombre: ".$nombre_usuario."\r\n";
$mensaje.="Email: ".$email_usuario."\r\n";
$mensaje.="Consulta: ".$consulta_usuario."\r\n";

$remitente="From: consulta@marcsanuy.es";

mail($destino, $asunto, $mensaje, $remitente);

header("Location:index.php?i=ok");
?>
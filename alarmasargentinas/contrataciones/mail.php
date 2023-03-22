<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
    
// Incluya las librerías de PHPMailer
    
require_once 'tu_ruta/PHPMailer/src/Exception.php';
require_once 'tu_ruta/PHPMailer/src/PHPMailer.php';
require_once 'tu_ruta/PHPMailer/src/SMTP.php';
    
// Cree una nueva instancia de PHPMailer
    
$mail = new PHPMailer(true);
    
// Configuración del servidor SMTP
    
$mail->isSMTP();
$mail->Host = getenv("servidor");
$mail->SMTPAuth = true;
$mail->Username = getenv("usuario");;
$mail->Password = getenv("password");;
$mail->SMTPSecure = 'tls';
$mail->Port = 465;

    // Recuperar los datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    
    // Configuración del correo electrónico
    $to = " no-reply@c2231315.ferozo.com"; // Cambiar por la dirección deseada
    $subject = "Mensaje del formulario";
    $message = "Nombre: " .$nombre. "\r\n" .
        "Email: " .$email. "\r\n" .
        "Mensaje: " .$mensaje;
    $headers = "From:  no-reply@c2231315.ferozo.com" . "\r\n" .
        "Reply-To:  no-reply@c2231315.ferozo.com" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();
    
    // Enviar el correo electrónico
    if (mail($to, $subject, $message, $headers)) {
        echo "El mensaje ha sido enviado correctamente";
    } else {
        echo "Error al enviar el mensaje";
    }
?>
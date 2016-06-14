<?php
require_once("parametros.php");

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    error_log("Connection failed: " . $conn->connect_error);
} 
//error_log(print_r($_REQUEST,1));

$email = mysqli_real_escape_string($conn, utf8_decode($_REQUEST['email']));
$key   = mysqli_real_escape_string($conn, $_REQUEST['k']);

 if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
 }
 
// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

if($key == 'KucAgzGx7R2J3E1VSHsVDV6cjAsr1m4ZTbOUuV1UGqKeEX3GcEfEjbwwirlQ2nDV')
{
    $result = $conn->query("SELECT * FROM prospecto WHERE email = '" . $email ."'");    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        require 'PHPMailer/PHPMailerAutoload.php';

        $mail = new PHPMailer;
        //$mail->SMTPDebug = 3;                               // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'mail.universidaduninova.mx';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'app@universidaduninova.mx';                 // SMTP username
        $mail->Password = 'mblHUOmxXi3x';                           // SMTP password
        //$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 26;                                    // TCP port to connect to

        $mail->setFrom('app@universidaduninova.mx', 'App UNINOVA');
        $mail->addAddress(utf8_encode($row["email"]) );     // Add a recipient
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Recuperación del ID de registro en la app de UNINOVA';
        $mail->Body    = 'Hola '.utf8_decode($row["nombres"]).', has solicitado el env&iacute;o de tu ID de registro, el cual es <b>'.$row["id"].'</b>, con este ID y tu email pueden iniciar sesi&oacute;n en la aplicaci&oacute;n de nuevo. Gracias por pensar en nosotros como tu opci&oacute;n de estudios!';
        //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        if(!$mail->send()) {
            echo '{"estatus":-1}';
            error_log('Message could not be sent, Mailer Error: ' . $mail->ErrorInfo);
        } else {
            echo '{"estatus":1}';
            error_log('Message has been sent');
        }

    } else {
        echo '{"estatus":0}';
    }
}
else
{
    echo '{"estatus":-1}';
}

$conn->close();
?>
<?php
require_once("parametros.php");

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
//error_log(print_r($request->params,1));

$nombres   = mysqli_real_escape_string($conn, utf8_decode($request->params->nombres));
$apellidos = mysqli_real_escape_string($conn, utf8_decode($request->params->apellidos));
$email     = mysqli_real_escape_string($conn, utf8_decode($request->params->email));
$carrera   = mysqli_real_escape_string($conn, utf8_decode($request->params->carrera));
$key       = mysqli_real_escape_string($conn, $request->params->k);

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


if($key == 'FbXlty3JWwHNHOy3FWlHkSoXhrOtAFcjrA6emGydsfFPE4tblss04GaX4XicfAFk')
{
    $sql = "INSERT INTO prospecto (nombres, apellidos, email, carrera, foto) VALUES ('".$nombres."', '".$apellidos."', '".$email."', '".$carrera."', '')";

    if ($conn->query($sql) === TRUE)
    {
        $last_id = $conn->insert_id;
        $result = $conn->query("SELECT * FROM prospecto WHERE id = " . $last_id);    
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
            $mail->Subject = 'Registro en la app de UNINOVA';
            $mail->Body    = 'Hola '.utf8_decode($row["nombres"]).', gracias por registrarte en la aplicaci&oacute;n de la Universidad UNINOVA; tu ID de registro, es el <b>'.$row["id"].'</b>. con este ID y tu email pueden iniciar sesi&oacute;n en la aplicaci&oacute;n. Gracias por pensar en nosotros como tu opci&oacute;n de estudios!';
            //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            if(!$mail->send()) {
                error_log('Message could not be sent, Mailer Error: ' . $mail->ErrorInfo);
            } else {
                error_log('Message has been sent');
            }

            echo '{"id":'.$row["id"].',"nombres":"'.utf8_encode($row["nombres"]).'","apellidos":"'.utf8_encode($row["apellidos"]).'","email":"'.utf8_encode($row["email"]).'","carrera":"'.utf8_encode($row["carrera"]).'","num_registro":"'.$row["id"].'","foto":"'.utf8_encode($row["foto"]).'"}';
        } else {
            echo "{}";
        }


    } else {
        error_log("Error: " . $sql . "<br>" . $conn->error);
        echo "{}";
    }

}
else
{
    echo "{}";
}



$conn->close();
?>
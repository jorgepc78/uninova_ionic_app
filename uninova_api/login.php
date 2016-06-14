<?php
require_once("parametros.php");

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    error_log("Connection failed: " . $conn->connect_error);
} 
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
//error_log(print_r($_REQUEST,1));

$email          = mysqli_real_escape_string($conn, utf8_decode($_REQUEST['email']));
$num_registro   = mysqli_real_escape_string($conn, $_REQUEST['num_registro']);
$key            = mysqli_real_escape_string($conn, $_REQUEST['k']);

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

if($key == 'aAnFBvIBJZk0gS2D5ax4fHvts1zCDsIoDuvNjfUmOCXnCCdblMeZHhmNyofCQLo9')
{
    //error_log("SELECT * FROM prospecto WHERE email = '" . $email ."' and id = ".$num_registro);
    $result = $conn->query("SELECT * FROM prospecto WHERE email = '" . $email ."' and id = ".$num_registro);    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo '[{"id":'.$row["id"].',"nombres":"'.utf8_encode($row["nombres"]).'","apellidos":"'.utf8_encode($row["apellidos"]).'","email":"'.utf8_encode($row["email"]).'","carrera":"'.utf8_encode($row["carrera"]).'","num_registro":"'.$row["id"].'","foto":"'.utf8_encode($row["foto"]).'"}]';
    } else {
        echo "[]";
    }
}
else
{
    echo "[]";
}

$conn->close();
?>
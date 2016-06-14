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

$id        = mysqli_real_escape_string($conn, $request->params->id);
$nombres   = mysqli_real_escape_string($conn, utf8_decode($request->params->nombres));
$apellidos = mysqli_real_escape_string($conn, utf8_decode($request->params->apellidos));
$email     = mysqli_real_escape_string($conn, utf8_decode($request->params->email));
$carrera   = mysqli_real_escape_string($conn, utf8_decode($request->params->carrera));
$foto      = mysqli_real_escape_string($conn, utf8_decode($request->params->foto));
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

if($key == 'zIFH9i3lx7ukOKMSmAWSoQmGCtqWBIqACNphlDdBIo8bOzEN8oCDJDp0N5Mus6PL')
{
    $sql = "UPDATE prospecto SET nombres = '".$nombres."', apellidos = '".$apellidos."', email = '".$email."', carrera = '".$carrera."', foto = '".$foto."' WHERE id = " . $id;

    if ($conn->query($sql) === TRUE)
    {
        $result = $conn->query("SELECT * FROM prospecto WHERE id = " . $id);    
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
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
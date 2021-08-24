<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$dbhost = '127.0.0.1';
$dbuser = 'root';
$dbpasswd = '';
$dbname = 'anketa';

$conn = mysqli_connect( $dbhost,  $dbuser, $dbpasswd,$dbname);
mysqli_select_db($conn, "anketa");
if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
}
mysqli_set_charset($conn,"utf8");
$specialty=$_POST['specialty'];
$sql =  "SELECT specialty, ROUND(AVG( estim )*100) AS estim
        FROM estimations
        WHERE specialty =$specialty
        UNION
        SELECT specialty, 100-ROUND(AVG( estim )*100) AS estim
        FROM estimations
        WHERE specialty =$specialty";
$result = mysqli_query($conn, $sql);

$data=array();

while($row = mysqli_fetch_assoc($result)) {
$data[]= $row;
}

echo json_encode($data);
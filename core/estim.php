<?php
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

$comp_id=$_POST['comp_id'];
$comp_name=$_POST['comp_name'];
$estim=$_POST['estim'];
$specialty=$_POST['specialty'];

mysqli_select_db($conn, "anketa");
$sql = "INSERT INTO estimations (comp_id, comp_name, estim, specialty) 
        VALUES ('$comp_id', '$comp_name', '$estim','$specialty')";

if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
} else {
echo "Error: " . $sql . mysqli_error($conn);
}

mysqli_close($conn);
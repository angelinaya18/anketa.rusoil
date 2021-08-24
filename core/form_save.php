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

$family=$_POST['family'];
$name=$_POST['name'];
$otch=$_POST['otch'];
$company_type=$_POST['company_type'];
$company_name=$_POST['company_name'];
$position=$_POST['position'];
$structural_division=$_POST['structural_division'];


mysqli_select_db($conn, "anketa");
$sql = "INSERT INTO employer (family, name, otch, company_type, company_name, position, structural_division) 
        VALUES ('$family', '$name', '$otch', '$company_type', '$company_name', '$position', '$structural_division')";

if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
} else {
echo "Error: " . $sql . mysqli_error($conn);
}
$lastInsertedId = mysqli_insert_id($conn);
echo "id: " . $lastInsertedId;
mysqli_close($conn);
return $lastInsertedId;
    //writeJSON();

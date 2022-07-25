<?php 
header('Access-Control-Allow-Origin: *');

$dbservername = "localhost";
$dbname = "admin-redux";
$dbusername = "root";
$password = "";


$sql = "mysql:host=$dbservername;dbname=$dbname";
$conn = new PDO($sql,$dbusername,$password);

if($conn)
{
    
echo "connection succesed";

}else
{
    echo "connection failed";
}
?>
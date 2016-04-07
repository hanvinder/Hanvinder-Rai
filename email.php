<?php ob_start();
	
	 //if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "hanvinder@gmail.com";
  $email = $_REQUEST['email'];
  $name1 = $_REQUEST['name1'];
  $message = $_REQUEST['message'];
  
  //send email
  mail($admin_email, "$name1", $message, "From:" . $email);
  
  //Email response
  
  header('location:new.php');
  }
ob_flush();?>
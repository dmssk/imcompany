<?php
error_reporting(0);
ini_set('display_errors', 0);

/*INCLUDE MAIN PHP-FILES*/
include_once dirname(__FILE__) . '/php/functions.php';


// check whether the request is from current domain
$is_request_from_same_domain = (strpos($_SERVER['HTTP_REFERER'], '://' . $_SERVER['HTTP_HOST'])) ? true : false;

if ($_POST && $is_request_from_same_domain) {

    $subject = 'Новый лид с express-branding.imcompany.pro';
    $message = 'Имя - ' . $_POST['name'] .
        '<br>Телефон - ' . $_POST['phone'];


    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $to = 'info@imcompany.pro';


    mail($to, $subject, $message, $headers);

}

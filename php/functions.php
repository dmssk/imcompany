<?php

function dd($variable)
 {
        echo '<pre>';
        print_r($variable);
        echo '</pre>';
        die();
 }

// Write something to Log file
function to_log($vvod)
{
    $date = date("Y_m_d");
    $filename = "logs/log_".$date.".txt";
    $string = date("d.m.Y H:i:s")." => $vvod"."\n";
    $f = fopen($filename,"a+");
    fwrite($f,$string);
    fclose($f);
}

// Write something to Error Log file
function to_error_log($vvod)
{
    $date = date("Y_m_d");
    $filename = "logs/error_log_".$date.".txt";
    $string = date("d.m.Y H:i:s")." => $vvod"."\n";
    $f = fopen($filename,"a+");
    fwrite($f,$string);
    fclose($f);
}

/*Get Client IP*/
function getClientIP() {
    if (isset($_SERVER)) {
        if (isset($_SERVER["HTTP_X_FORWARDED_FOR"]))
            return $_SERVER["HTTP_X_FORWARDED_FOR"];

        if (isset($_SERVER["HTTP_CLIENT_IP"]))
            return $_SERVER["HTTP_CLIENT_IP"];

        return $_SERVER["REMOTE_ADDR"];
    }
    if (getenv('HTTP_X_FORWARDED_FOR'))
        return getenv('HTTP_X_FORWARDED_FOR');
    if (getenv('HTTP_CLIENT_IP'))
        return getenv('HTTP_CLIENT_IP');
    return getenv('REMOTE_ADDR');
}

function isDebugOn()
{
    return !empty($_SESSION['isDebugOn']);
}



function get_website_url() {
    return $url = ( isset($_SERVER['HTTPS'] ) ? "https" : "http") . "://{$_SERVER['HTTP_HOST']}";
}

function get_website_root_page() {

    $real_path_cur_file = str_replace( '\\', '/', dirname(__FILE__) );

    $url = str_replace( $_SERVER['DOCUMENT_ROOT'], '', $real_path_cur_file );
    $url = str_replace( 'php', '', $url );

    return get_website_url() . $url;
}

?>

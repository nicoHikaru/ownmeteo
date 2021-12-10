<?php

namespace App\Geolocalisation;

class ApiLocalisation
{
    /**
     * use of ip to locate user city
     * return string
     */
    public static function geolocalised():string
    {
        $ip = $_SERVER['REMOTE_ADDR'];
        if(filter_var($ip,FILTER_VALIDATE_IP) !== false) {
            $data = json_decode(file_get_contents("http://geoplugin.net/json.gp?ip=".$ip),true);
            return $data['geoplugin_city'];
        }
    }
}
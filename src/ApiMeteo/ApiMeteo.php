<?php

namespace App\ApiMeteo;

class ApiMeteo
{
    /**
     * take 1 parametre string $city
     * the parameter must first be cleaned to correspond to the name of the cities of the weather api 
     * with class App\ChainProcessing\ChainProcesssing
     * return array form data meteo api 
     */
    public function getData(string $city):array
    {
        $data = json_decode(file_get_contents("https://www.prevision-meteo.ch/services/json/".$city),true);
        return $data;
    }
}
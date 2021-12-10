<?php

namespace App\DateManager;

class DateManager
{
    /**
     * return string date hours local europe/paris
     */
    public static function now_time():string
    {
        setlocale(LC_TIME, 'fr_FR');
        date_default_timezone_set('Europe/Paris');
        $date = new \DateTime();
        return $date->format('H');
    }
}
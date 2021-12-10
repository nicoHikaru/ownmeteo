<?php

namespace App\ChainProcessing;
use Config\AbstractClass\AbstractProcessing;


class ChainSanitize extends AbstractProcessing
{
    /**
     * take 1 parameter string
     * sanitaze Chain
     * return string
     */
    public static function sanitize(string $chaine):string
    {
        $sanitazeChaine = filter_var($chaine,FILTER_SANITIZE_STRING);
        return $sanitazeChaine;
    }
}
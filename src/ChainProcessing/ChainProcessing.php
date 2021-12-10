<?php

namespace App\ChainProcessing;
use Config\AbstractClass\AbstractProcessing;

class ChainProcessing extends AbstractProcessing
{
    /**
     * take 1 parameter string
     * withdraws the definite article
     * return string
     */
    public static function sanitize(string $city):string
    {
        $firsLetter = preg_match("/^les|^la|^le|^des|^de|^l\'|^d\'|^Les|^La|^Le|^Des|^De|^L\'|^D\'/",$city);
        if($firsLetter === 1) {
            $content = preg_replace("/^les|^la|^le|^des|^de|^l\'|^d\'|^La|^Le|^Les|^Des|^De|^L\'|^D\'/",'',$city);
            $newContent = trim($content);
            $sanitazeChaine = str_replace(" ","-",$newContent);
            return $sanitazeChaine;
        } else {
            $newContent = trim($city);
            $sanitazeChaine = str_replace(" ","-",$newContent);
            return $sanitazeChaine;
        }
    }
}
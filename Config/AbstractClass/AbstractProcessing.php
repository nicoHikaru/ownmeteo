<?php

namespace Config\AbstractClass;

abstract class AbstractProcessing
{
    abstract public static function sanitize(string $chaine):string;
}
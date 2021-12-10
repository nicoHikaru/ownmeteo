<?php

require "../vendor/autoload.php";
use Config\Error\ErrorManager;

$error = new ErrorManager();
$display = $error->displayError();

require './../src/Controller/layout.php';
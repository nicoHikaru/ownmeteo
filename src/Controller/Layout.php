<?php
use App\Router;

$route = new Router();
$uri = $_SERVER['REQUEST_URI'];
$route->route($uri);

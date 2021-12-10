<?php 
namespace Config\Error;

class ErrorManager
{
	public function displayError()
	{
		$whoops = new \Whoops\Run;
		$whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
		$whoops->register();
	}
}
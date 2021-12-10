<?php

namespace App;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use App\ApiMeteo\ApiMeteo;
use App\Geolocalisation\ApiLocalisation;
use App\DateManager\DateManager;
use App\ChainProcessing\ChainProcessing;
use App\ChainProcessing\ChainSanitize;

class Router
{

    public function route($uri):void
    {

        $app = AppFactory::create();
        $url = filter_var($uri,FILTER_SANITIZE_URL);

        $app->map(['GET','POST'],$url, function (Request $request, Response $response, $args) {

            //we recup ip adress from user
            $localisation = ApiLocalisation::geolocalised();
            
            if($localisation === "") {
                $searchCity = self::saerchCity($response);
                //this condition check if search barre is used by user
                if($searchCity === null) {
                    return self::defaultDisplay($response);
                } else {
                    return $searchCity;
                }
            } else {
                /**
                 * we clean the result of App\ApiLocalisation\ApiLocalisation::geolocalised
                 * so that it corresponds to the name of the city of api meteo
                 */
                $city = ChainProcessing::sanitize($localisation);
                
                $searchCity = self::saerchCity($response);
                if($searchCity === null ) {
                    $args = self::display($city);
                    $time = DateManager::now_time();
                    require_once '../templates/layout.phtml';
                    return $response;
                } else {
                    return self::defaultDisplay($response);
                }
            }
        });

        $app->run();
    }

    /**
     * this method search city
     * it's private because we use this method only this class
     * return null or response
     */
    private static function saerchCity(Response $response)
    {
        if(isset($_POST['submit'])) {
            $city = $_POST['ville'];
            if(!empty($city)) {                
                $sanitizeCity = ChainProcessing::sanitize($city);
                $args = self::display($sanitizeCity);

                if(isset($args['errors'][0]['code']) && $args['errors'][0]['code'] === "11") {
                    return null;
                }
                
                $time = DateManager::now_time();
                require_once '../templates/layout.phtml';
                return $response;
            }
        }
    }

    /**
     * display data form api meteo in views
     */
    private static function display(string $city):array
    {
        $data = new ApiMeteo();
        $args = $data->getData($city);
        return $args;
    }

    /**
     * this method is use if api location not found result
     * the default city paris use but we can change var $city if we want another city default display
     */
    private static function defaultDisplay(Response $response):Response
    {
        $city = "saint-jean-de-maurienne";
        $args = self::display($city);
        self::saerchCity($response);
        $time = DateManager::now_time();
        require_once '../templates/layout.phtml';
        return $response;
    }

}
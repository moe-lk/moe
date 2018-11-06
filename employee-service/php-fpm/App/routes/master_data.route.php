<?php


$router = new Phroute\RouteCollector(new Phroute\RouteParser);


$router->group( ['prefix'=>'v2'],  function($router){
     
    $router->filter('auth', function () {
        $auth = new Lib\Auth();
        if (!$auth->isValidToken()) {
            return 1;
        }
    });

    $router->group(array('before' => 'auth'), function ($router) {
        $router->get('v2/work-place?_end={filter}?&_order={range}?&_sort={sort}?&_start={start}?', function ($id) {
            $controller = new Controllers\MasterDataController();
            return $controller->get('Work_Place');
        });
    });
});

<?php

include 'user.route.php';
// include 'master_data.route.php';

// $controller = new

$dispatcher = new Phroute\Dispatcher($router);

try {

    $response = $dispatcher->dispatch($_SERVER['REQUEST_METHOD'], ($_SERVER['REQUEST_URI']));

} catch (Phroute\Exception\HttpRouteNotFoundException $e) {

    var_dump($e);
    response(null,  404,  $e);
    die();

} catch (Phroute\Exception\HttpMethodNotAllowedException $e) {
    log_message('error',$e);
    response(null,  405,  $e);
    die();

} catch (Phroute\Exception\BadRouteException $e){
    log_message('error',$e);
    response(null,  500,  $e);
    die();

} catch (Exception $e){
    log_message('error',$e);
    response(null,  502,  $e);

    die();
}

<?php

$router = new Phroute\RouteCollector(new Phroute\RouteParser);

$router->filter('auth', function () {
    $auth = new Lib\Auth();
    if (!$auth->isValidToken()) {
        return 1;
    }
});

$router->group(['prefix' => 'v2/employees', 'before' => 'auth'], function ($router) {
        $router->get('v2/employees?id_like={ids}', function(){
            $user = new Controllers\UserController();
            return $user->listByIds();
        })
        ->get('v2/employees?_end={end}?&_order={order}?&_sort={sort}?&_start={start}?&{filter}', function () {
            $user = new Controllers\UserController();
            return $user->list();
        })
        ->post('v2/employees', function () {
            $user = new Controllers\UserController();
            return $user->post();
        })
        ->put('v2/employees/{id}', function () {
            $user = new Controllers\UserController();
            return $user->post();
        })
        ->get('v2/employees/{id}', function ($id) {
            $user = new Controllers\UserController();
            return $user->get($id);
        })
        ->post('v2/employee/statusUpdate', function () {
            $user = new Controllers\UserController();
            return $user->statusUpdate();
        })
        ->post('v2/employee/approveReject', function () {
            $user = new Controllers\UserController();
            return $user->approveReject();
        })
        ->put('v2/employee/generalService', function () {
            $user = new Controllers\UserController();
            return $user->generalService();
        });
});

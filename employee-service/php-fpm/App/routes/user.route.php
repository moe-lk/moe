<?php


$router = new Phroute\RouteCollector(new Phroute\RouteParser);


$router->group( ['prefix'=>'v2'],  function($router){
    
    $router->post('v2/user/login', function () {
        $login = new \Controllers\LoginController();
        return $login->post();
    });

    $router->any('v2', function () {
        $api = new \Controllers\ApiController();
        return ($api->get('test'));
    });

    $router->post('v2/user/register',function(){
        $user = new \Controllers\UserController();
        return $user->post();
    });
    /** 
     * Swagger documentation
     */
    
 

    $router->filter('auth', function () {
        $auth = new Lib\Auth();
        if (!$auth->isValidToken()) {
            return 1;
        }
    });
    
    $router->group(array('before' => 'auth'), function ($router) {
        
        $router->get('v2/employees?id_like={ids}', function ($ids) {
            $user = new Controllers\UserController();
            return $user->listByIds();
        })
        ->get('v2/employees?_end={end}?&_order={order}?&_sort={sort}?&_start={start}?&{filter}', function ($end,$order,$sort,$start,$filter) {
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
        })
      
        ->get('v2/user', function () {
            $user = new Controllers\LoginController();
            return $user->get();
        })
        ->get('v2/options?_end={end}?&_order={order}?&_sort={sort}?&_start={start}?&{filter}',function($end,$order,$sort,$start,$filter){
            $controller = new Controllers\OptionsController();
            return $controller->get($filter);

        })
        ->get('v2/workbranch?_end={end}?&_order={range}?&_sort={sort}?&_start={start}?&{filter}', function ($option) {
            $controller = new Controllers\MasterDataController();
            return $controller->get('workbranch');
        })
        ->get('v2/workbranch?id_like={ids}?', function ($ids) {
            $controller = new Controllers\WorkBranchController();
            return $controller->listByIds();
        })
        ->get('v2/workplace?end={end}?&_order={range}?&_sort={sort}?&_start={start}?', function ($option) {
            $controller = new Controllers\MasterDataController();
            return $controller->get('workplace');
        })
        ->get('v2/workplace?id_like={ids}?', function ($ids) {
            $controller = new Controllers\WorkPlaceController();
            return $controller->listByIds();
        })
        ->get('v2/institutes?id_like={ids}?', function ($ids) {
            $controller = new Controllers\MasterDataController();
            return $controller->get('Institutes');
        })
        ->get('v2/worklocation?_end={end}?&_order={range}?&_sort={sort}?&_start={start}?', function ($option) {
            $controller = new Controllers\MasterDataController();
            return $controller->get('worklocation');
        })
        ->get('v2/designation?_end={filter}?&_order={range}?&_sort={sort}?&_start={start}?', function ($option) {
            $controller = new Controllers\MasterDataController();
            return $controller->get('designation');
        })
        ->get('v2/designation?id_like={ids}?', function ($ids) {
            $controller = new Controllers\DesignationController();
            return $controller->listByIds();
        })
        ->get('v2/qualification?_end={end}?&_order={range}?&_sort={sort}?&_start={start}?', function ($option) {
            $controller = new Controllers\MasterDataController();
            return $controller->get('qualification');
        })
        ->get('v2/province?_end={end}?&_order={range}?&_sort={sort}?&_start={start}?', function ($option) {
            $controller = new Controllers\MasterDataController();
            return $controller->get('province');
        })
        ->get('v2/qualification?id_like{id}', function ($id) {
            $controller = new Controllers\MasterDataController();
            return $controller->get('qualification');
        })
        ->get('v2/templates?_end={end}?&_order={range}?&_sort={sort}?&_start={start}?', function ($id) {
            $controller = new Controllers\LetterTemplateController();
            return $controller->list('Templates');
        })
        ->get('v2/templates/{id}', function ($id) {
            $controller = new Controllers\LetterTemplateController();
            return $controller->get($id);
        })
        ->get('v2/templates?id_like={ids}', function ($ids) {
            $controller = new Controllers\LetterTemplateController();
            return $controller->listByIds($ids);
        })
        ->post('v2/templates', function () {
            $controller = new Controllers\LetterTemplateController();
            return $controller->post();
        })
        ->put('v2/templates/{id}', function ($id) {
            $controller = new Controllers\LetterTemplateController();
            return $controller->put($id);
        })
         ->get('v2/placement?_end={end}?&_order={order}?&_sort={sort}?&_start={start}?&{filter}', function ($end,$order,$sort,$start,$filter) {
            $services = new Controllers\ServiceController();
            return $services->list();
        })
        ->get('v2/placement-employee/{id}', function ($id) {
            $services = new Controllers\ServiceController();
            return $services->get($id);
        })
        ->get('v2/placement/{id}', function ($id) {
            $services = new Controllers\ServiceController();
            return $services->get($id);
        })
        ->post('v2/placement', function () {
            $controller = new Controllers\ServiceController();
            return $controller->post();
        })
        ->put('v2/placement/{id}', function () {
            $controller = new Controllers\ServiceController();
            return $controller->put();
        })
        ->get('v2/schools/{id}', function ($id) {
            $schools = new Controllers\InstituteController();
            return $schools->get($id);
        });
    });

 
    // $router->group(array('before' => 'auth'), function ($router) {
    //     $router->get('v2/workbranch?_end={filter}?&_order={range}?&_sort={sort}?&_start={start}?', function ($option) {
    //         $controller = new Controllers\MasterDataController();
    //         return $controller->get('workbranch');
    //     });
    // });


});


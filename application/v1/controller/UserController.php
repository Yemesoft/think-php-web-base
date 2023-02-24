<?php

namespace app\v1\controller;

use think\Exception;

class UserController extends BaseController
{
    function login()
    {
        try{
            $username = request('username');
            $password = request('password');
            if (empty($username) || empty($password)) {
                sendResponse(-1, "用户名或密码不能为空");
            }
            $users = model('user')->all();
            sendResponse($users);
        } catch (Exception $e){
            var_dump($e);
            die();
        }
    }

    function info()
    {
        return "{
            code:0,
            message: 'success',
            data:{
                id: 1,
                name: 'zhangsan',
                'role|1': ['admin', 'visitor'],
                avatar: '@image('48x48', '#fb0a2a')',
          }
        ";
    }
}

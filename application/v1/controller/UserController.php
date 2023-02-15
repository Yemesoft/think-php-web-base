<?php

namespace app\v1\controller;

use think\Exception;

class UserController extends BaseController
{
    function login()
    {
        $users = model('user')->all();
        sendResponse($users);
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

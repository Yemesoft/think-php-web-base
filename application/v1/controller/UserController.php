<?php

namespace app\v1\controller;

use app\v1\model\UserModel;

class UserController extends BaseController
{
    function login()
    {
        $account = get_params('account');
        $password = get_params('password');
        if (empty($account) || empty($password)) {
            sendResponse(-1, "账号或密码不能为空");
        }
        $users = model('user')->where(UserModel::USER_NAME, '=', $account)->where(UserModel::PASSWORD, '=', $password)->all();
        if (1 === count($users)) {
            unset($users[0]['password']);
            sendResponse($users[0]);
        }
        $users = model('user')->where(UserModel::MOBILE, '=', $account)->where(UserModel::PASSWORD, '=', $password)->all();
        if (1 === count($users)) {
            unset($users[0]['password']);
            sendResponse($users[0]);
        }
        sendResponse(-1, "账号或密码错误");
    }

    function info()
    {
        $userId = get_params('user_id');
        if (empty($userId)) {
            sendResponse(-1, "参数错误");
        }
        $users = model('user')->where(UserModel::ID, '=', $userId)->all();
        if (1 === count($users)) {
            unset($users[0]['password']);
            sendResponse($users[0]);
        }
        sendResponse(-1, "参数错误");
    }
}

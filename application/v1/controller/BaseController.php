<?php

namespace app\v1\controller;

use think\Controller;

class BaseController extends Controller
{
    function _empty()
    {
        sendResponse(404, 'Not found');
    }
}

<?php

namespace app\v1\controller;

use think\Controller;

class EmptyController extends BaseController
{
    function index()
    {
        sendResponse(404, 'Not found');
    }
}

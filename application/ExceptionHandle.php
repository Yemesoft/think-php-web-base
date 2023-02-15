<?php

namespace app;

use Exception;
use think\exception\Handle;

class ExceptionHandle extends Handle
{
    public function render(Exception $e)
    {
        sendResponse(500, 'Server Error');
    }

}

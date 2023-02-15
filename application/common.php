<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件
$request_params = file_get_contents('php://input');
if (empty($request_params)) {
    $request_params = '{}';
}
$request_params = json_decode($request_params, true);

function all_params()
{
    global $request_params;
    return $request_params;
}

/**
 * @param $code_or_data int|object code或者data
 * @param $message string message
 * @param $data object|null data
 * @return void
 */
function sendResponse($code_or_data = 0, $message = 'success', $data = null)
{
    $arr = array();
    if (is_integer($code_or_data)) {
        $arr['code'] = $code_or_data;
        $arr['message'] = $message;
        if (null != $data) {
            $arr['data'] = $data;
        }
    } else {
        $arr['code'] = 0;
        $arr['message'] = 'success';
        if (null != $code_or_data) {
            $arr['data'] = $code_or_data;
        }
    }
    die(json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_FORCE_OBJECT));
}

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
$GLOBALS['request_params'] = json_decode($request_params, true);
function all_params()
{
    global $GLOBALS;
    return $GLOBALS['request_params'];
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
    die(json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
}

/**
 * 下划线转驼峰
 * 思路:
 * step1.原字符串转小写,原字符串中的分隔符用空格替换,在字符串开头加上分隔符
 * step2.将字符串中每个单词的首字母转换为大写,再去空格,去字符串首部附加的分隔符.
 */
function camelize($uncamelized_words, $separator = '_')
{
    $uncamelized_words = $separator . str_replace($separator, " ", strtolower($uncamelized_words));
    return ltrim(str_replace(" ", "", ucwords($uncamelized_words)), $separator);
}

/**
 * 驼峰命名转下划线命名
 * 思路:
 * 小写和大写紧挨一起的地方,加上分隔符,然后全部转小写
 */
function uncamelize($camelCaps, $separator = '_')
{
    return strtolower(preg_replace('/([a-z])([A-Z])/', "$1" . $separator . "$2", $camelCaps));
}

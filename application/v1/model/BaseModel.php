<?php

namespace app\v1\model;

use ReflectionException;
use think\Model;

abstract class BaseModel extends Model
{
    const MD5_FIELD_NAME = 'SERIAL';

    private $current_fields_md5 = false;

    private function currentFieldsMd5()
    {
        if (!$this->current_fields_md5) {
            $fields = $this->getConnection()->getTableFields($this->getTable());
            sort($fields);
            $str = implode('', $fields);
            $this->current_fields_md5 = md5($str);
        }
        return $this->current_fields_md5;
    }

    private function isTableChanged()
    {
        $class_name = get_class($this);
        $old_md5 = null;
        try {
            $class = new \ReflectionClass($class_name);
            $old_md5 = $class->getConstant(BaseModel::MD5_FIELD_NAME);
        } catch (ReflectionException $e) {
            //TODO nothing
        }
        return null === $old_md5 || $this->currentFieldsMd5() !== $old_md5;
    }

    public function __construct($data = [])
    {
        parent::__construct($data);
        if ($this->isTableChanged()) {
            $this->updateModel();
        }
    }

    /**
     * @throws ReflectionException
     */
    private function updateModel()
    {
        $class_name = get_class($this);
        $class = new \ReflectionClass($class_name);
        $class_file = $class->getFileName();
        $class_file_content = file_get_contents($class_file);
//            die('$class_file_content=' . $class_file_content);
        $fields = $this->getConnection()->getTableFields($this->getTable());
        $fields_declare = '';
        foreach ($fields as $field) {
            $fields_declare .= ("    const " . strtoupper($field) . " = \"" . $field . "\";\n");
        }
        $class_file_content = preg_replace("/\/\/field_names_start.+\/\/field_names_end/is", "//field_names_start\n" . $fields_declare . "    //field_names_end", $class_file_content);
        $class_file_content = preg_replace("/\/\/field_names_md5_start.+\/\/field_names_md5_end/is", "//field_names_md5_start\n    const " . BaseModel::MD5_FIELD_NAME . " = \"" . $this->currentFieldsMd5() . "\";\n    //field_names_md5_end", $class_file_content);
        file_put_contents($class_file, $class_file_content);
    }

}

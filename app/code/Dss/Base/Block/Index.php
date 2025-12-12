<?php
 namespace Dss\Base\Block;  

use Magento\Framework\View\Element\Template; 
 
class Index extends Template
 {     public function getHelloWorldText()    
        {
            return 'Hello world! This describes a module';
        }
}


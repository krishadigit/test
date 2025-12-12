<?php
namespace Dss\Base\Block;

use Magento\Framework\View\Element\Template;

class Calculation extends Template
{
    // This function will handle sum calculation
    public function calculateSum()
    {
        // Check if form is submitted
        if (isset($_POST['num1']) && isset($_POST['num2'])) {
            $num1 =$_POST['num1'];
            $num2 =$_POST['num2'];
            return $num1 + $num2;
        }           
        return null; // If form not submitted yet
    }
}

define(['jquery','Magento_Ui/js/modal/alert','mage/url'], function($, alert, urlBuilder){
    'use strict';

    return function(){
        $(document).ready(function(){
            $('.order-now').on('click', function(e){
                e.preventDefault();

                var form = $('#product_addtocart_form');
                var formData = new FormData(form[0]);

                $.ajax({
                    url: form.prop('action'),
                    type: 'POST',
                    data: formData,
                    dataType: 'json',
                    cache: false,
                    contentType: false,
                    processData: false,
                });
            });

            
            $('.buy-now').on('click', function(){
                var form = $('#product_addtocart_form');
                form.data('action','buy-now'); // set flag for ajax:addToCart event
            });

            // Listen to Magento add-to-cart event
            $(document).on('ajax:addToCart', function(event, data){
                var form = data.form;
                var action = form.data('action');
                if(!action) return;

                if(action === 'buy-now'){
                    window.location.href = urlBuilder.build('checkout');
                }
                form.removeData('action');
            });

        });
    }
});

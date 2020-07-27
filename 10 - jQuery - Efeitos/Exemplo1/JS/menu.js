$(document).ready(function(){
    $('nav li ul').hide().removeClass('sublista');

    $('nav li').hover(
        function() {
            $('ul', this).stop().slideDown(400);
        },

        function(){
        $('ul', this).stop().slideUp(400);
    });

});
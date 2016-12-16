/**
 * Created by e.zhilyakova on 23.11.2016.
 */
$("li").has("ul").addClass('submenu');
$('.submenu > a').append('<span><i class="fa fa-caret-down" aria-hidden="true"></i></span>');
$('.submenu span').click(function() {
    $(this).next('#main-menu li > ul').toggleClass('openDesktopSubMenu');
});
$('.submenu a').hover(function() {
    $(this).next('#main-menu li > ul').addClass('openDesktopSubMenu');
}, function() {
    $(this).next('#main-menu li > ul').removeClass('openDesktopSubMenu');
});
$('#main-menu li > ul').hover(function() {
    $(this).addClass('openDesktopSubMenu');
}, function() {
    $(this).removeClass('openDesktopSubMenu');
});
var x = true;
$('#menuTrigger').on("click", function(e) {
    e.preventDefault();
    if (x) {
        $('.menu-container').stop().slideToggle('fast');
        x = false;
    }
    else {
        $('.menu-container').stop().slideToggle('fast', function() {
            $('.menu-container').css('display', '');
            x = true;
        })
    }
});
//приклееваем меню
$(document).ready(function() {
    var start_pos=$('#main-menu').offset().top;
    $(window).scroll(function(){
        if ($(window).scrollTop()>=start_pos) {
            if ($('#main-menu').hasClass()==false) $('#main-menu').addClass('to_top');
        }
        else $('#main-menu').removeClass('to_top');
    });
});
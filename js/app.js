/* app.js
* main script file for our little application
* */

"use strict";

$(function() {
    var nav = $('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    //var jqWin = $(window);
    var navPlaceHolder = $('.nav-placeholder');
    navPlaceHolder.height(navHeight);

    //jqWin.scroll(function() {
    $(window).scroll(function() {
       var scrollPos = $(this).scrollTop();
       //console.log(scrollPos);
       if (scrollPos > navTop) {
           nav.addClass('nav-fixed');
           navPlaceHolder.show();
       }
       else {
           nav.removeClass('nav-fixed');
           navPlaceHolder.hide();
       }
    });

    $('section a[class!="back-to-top"]').attr('target', '_blank');

    $('section').hide().fadeIn(1000);

    $('nav a').click(function(eventObject) {
        console.log(this.hash);
        var targetElement = $(this.hash);
        var targetTop = targetElement.offset().top;

        $('html,body').animate({scrollTop: targetTop - navHeight- 20}, 700);

        eventObject.preventDefault();
    });
});
// ==UserScript==
// @name         ExpandSpoilers
// @namespace    https://github.com/M92PL/
// @version      0.2
// @description  Fuck #GMLL, Fuck P*****M
// @author       Miechu
// @match        http://slizg.eu/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==



$(function(){
    $('#logo-right').append('<input type="button" id="expand-spoilers" value="Rozwin spoilery">');
    $('#expand-spoilers').on('click',function(){
        $('.quotecontent').each(function() {
            //$(this).css({"display":""});
            $(this).css("display", "");
            console.log($(this));
        });
    });
});

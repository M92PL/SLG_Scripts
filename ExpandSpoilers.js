// ==UserScript==
// @name         ExpandSpoilers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fuck #GMLL, Fuck Problem
// @author       Miechu
// @match        http://slizg.eu/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @downloadURL https://github.com/M92PL/SLG_Scripts/blob/master/ExpandSpoilers.js
// @updateURL https://github.com/M92PL/SLG_Scripts/blob/master/ExpandSpoilers.js
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

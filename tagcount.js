// ==UserScript==
// @name         tag Count new
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://code.jquery.com/jquery-migrate-3.3.2.min.js
// @require      https://cdn.jsdelivr.net/jquery.notification/1.0.3/jquery.notification.min.js
// @require https://raw.githubusercontent.com/kamranahmedse/jquery-toast-plugin/bd761d335919369ed5a27d1899e306df81de44b8/dist/jquery.toast.min.js
// @match        https://services.traxretail.com/trax-one/rwrewede/explore/probe*
// @grant        none
// ==/UserScript==


function injectStylesheet(url) {
    $('head').append('<link rel="stylesheet" href="'+url+'" type="text/css" />');
}

(function () {
    'use strict';
    injectStylesheet("https://cdn.rawgit.com/kamranahmedse/jquery-toast-plugin/bd761d335919369ed5a27d1899e306df81de44b8/dist/jquery.toast.min.css");
    setTimeout(function () {
        console.log('Start count');

        var a = ($('.icons-container').length);
        console.log(a);

        $.toast({
                    heading: 'Engine tag',
                    icon: 'success',
                    text: 'Engine tag count - ' + a,
                    bgColor: '#FF1356',
                    textColor: 'white',
                    hideAfter: 25000,
                    //stack: 4,
                    position: 'bottom-left',
                    //position: 'mid-center',
                    //textAlign: 'center'

                })

    }, 1000 * 25);
})();

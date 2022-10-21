// ==UserScript==
// @name         Edit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @require https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js
// @require https://raw.githubusercontent.com/kamranahmedse/jquery-toast-plugin/bd761d335919369ed5a27d1899e306df81de44b8/dist/jquery.toast.min.js
// @match        https://smart-prod.trax-cloud.com/smart-recognition/pngjp-sand/edit/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// ==/UserScript==


function injectStylesheet(url) {
    $('head').append('<link rel="stylesheet" href="'+url+'" type="text/css" />');
}

let onKeyDown = (e) => {
    let log = {keyCodeObject: 0, keyCode: 0}


    let keyAlt = e.altKey;
    let keyCtrl = e.ctrlKey;
    let keyShift = e.shiftKey;

    if(log.keyCodeObject){console.log(e);}

    let keyCode = e.which === 0 ? e.charCode : e.keyCode;

    if(log.keyCode){console.log(keyCode);}


    switch(keyCode){
        case 67:
            if(keyShift){
                console.log(`shift + \\ was pressed`);
                $( '.product-img' ).attr('style','width:300%');
            }else if (keyAlt){

            }else if (keyCtrl){
                var a = $(".trax-tst-tooltip-txt").html().replace(/\s*\(.*?\)\s*/g, '');
                navigator.clipboard.writeText(a);

                $.toast({
                    text: 'Name Copied',
                    heading: a,
                    loader: true,
                    loaderBg: '#9EC600',
                    showHideTransition: 'slide',
                    allowToastClose: true,
                    hideAfter: 5000,
                    position: 'top-left',
                    bgColor: '#FF1356',
                    textColor: '#white'
                });
            }else{
                console.log(`just + \\ was pressed`);
            }
            break;
        default:
    }
}

function yourFunctionHere(){
    console.log("things")
}

(function() {
    'use strict';
    injectStylesheet("https://cdn.rawgit.com/kamranahmedse/jquery-toast-plugin/bd761d335919369ed5a27d1899e306df81de44b8/dist/jquery.toast.min.css");
    document.addEventListener("keydown", onKeyDown);

    console.log("script loaded");
})();

// ==UserScript==
// @name         Inspector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @require https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js
// @require https://raw.githubusercontent.com/kamranahmedse/jquery-toast-plugin/bd761d335919369ed5a27d1899e306df81de44b8/dist/jquery.toast.min.js
// @match        https://services.traxretail.com/smart_inspector/*
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
        case 65:

            var src = $( '.product-img' ).attr('src');
            src =src.replace('small','large');
            $( '.product-img' ).attr('src',src);
            $( '.product-img' ).attr('style','width:350px; height:350px');
            $( '.product-name' ).attr('style','visibility: hidden');
            $( 'img.voter-box' ).attr('style','width:0%');
            $( '.Label' ).attr('style','font-size:0px');
            $( '.hover-tag-tooltip' ).attr('style','font-size:0px;padding: 0px');

            break;

        case 83:
            var src1 = $( '.product-img' ).attr('src');
            src =src1.replace('small','large');
            $( '.product-img' ).attr('src',src1);
            $( '.product-img' ).attr('style','width:500px; height:500px');
            $( 'img.voter-box' ).attr('style','width:0%');
            $( '.product-name' ).attr('style','visibility: hidden');
            $( '.Label' ).attr('style','font-size:0px');
            $( '.hover-tag-tooltip' ).attr('style','font-size:0px;padding: 0px');
            break;

        case 81:
            $( '.product-img' ).attr('style','height:5000px');
            $( '.product-img' ).attr('style','width:5000px');
            $( '.product-name' ).attr('style','font-size:0px');
            $( '.Label' ).attr('style','font-size:0px');
            $( '.hover-tag-tooltip' ).attr('style','font-size:0px');
            break;

        case 90:
            $( '.hover-tag-tooltip' ).attr('style','width:550px');
            $( '.product-img' ).attr('style','width:300%');
            $( '.product-name' ).attr('style','font-size:25px;margin-left:30px');
            $( '.voter-row' ).attr('style','margin-left:23px');
            //$( '.voter-box' ).attr('style','font-size:25px');
            break;

        case 221:
            $( '.product-img' ).attr('style','width:300%');
            break;

        case 67:
            if(keyShift){
                console.log(`shift + \\ was pressed`);
                $( '.product-img' ).attr('style','width:300%');
            }else if (keyAlt){

            }else if (keyCtrl){
                var a = document.querySelector("body > app-root > tx-layout > main > div > app-voting-process-info > div > div.tab-container > app-voting-process-image > div > div.canvas-container > app-voting-tag-tooltip > div > div > div > div.voter-info-col > span").innerHTML;


                navigator.clipboard.writeText(a);



                $.toast({
                    text: 'Name Copied',
                    heading: a,
                    loader: true,
                    loaderBg: '#9EC600',
                    showHideTransition: 'slide',
                    allowToastClose: true, 
                    hideAfter: 4000, 
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

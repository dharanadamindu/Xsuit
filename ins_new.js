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


        case 68:
            var srcv1 = $( '.majority-status-row .product-img' ).attr('src');
            srcv1 =srcv1.replace('small','large');
            $( '.majority-status-row .product-img' ).attr('src',srcv1);
            $( '.majority-status-row .product-img' ).attr('style','width:500px; height:500px ;margin-left:-700px; max-height: 500px');

            var srcm1 = $( '.minority-status-row .product-img' ).attr('src');
            srcm1 =srcm1.replace('small','large');
            $( '.minority-status-row .product-img' ).attr('src',srcm1);
            $( '.minority-status-row .product-img' ).attr('style','width:500px; height:500px ;margin-left:350px; margin-bottom: 135px; max-height: 500px; z-index: 999');
            $( '.minority-content' ).attr('style','overflow: unset !important');
            $( '.minority-status-row .title-row' ).attr('style','font-size: 0px');
            $( '.masker-row .title' ).attr('style','font-size: 0px');
            $( '.minority-status-col' ).attr('style','visibility: hidden');
            $( '.info-row' ).attr('style','visibility: hidden');
            $( '.hover-mask-tooltip' ).attr('style','display: contents');
            $( '.hover-mask-tooltip .user' ).attr('style','visibility: hidden');
            $( '.product-name' ).attr('style','font-size:0px');
            $( 'img.voter-box' ).attr('style','width:0%');
            $( '.Label' ).attr('style','font-size:0px');
            $( '.hover-tag-tooltip' ).attr('style','font-size:0px;padding: 0px');

            var url = 'data:image/png;base64,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';
            $(`<img src='${url}'>`).appendTo('.majority-status-row .product-name');
            $('.majority-status-row .product-name').attr('style','width:50px; height:50px; margin-bottom: 250px; margin-left:5px; font-size: 0px');

            var url1 = 'data:image/png;base64,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';
            $(`<img src='${url1}'>`).appendTo('.minority-status-row .product-name');
            $('.minority-status-row .product-name').attr('style','width:50px; height:50px; margin-bottom:300px; margin-left:-425px; font-size: 0px');
            break;

        case 81:
            var srcv = $( '.majority-status-row .product-img' ).attr('src');
            srcv =srcv.replace('small','large');
            $( '.majority-status-row .product-img' ).attr('src',srcv);
            $( '.majority-status-row .product-img' ).attr('style','width:350px; height:300px ;margin-left:-500px; max-height: 380%');

            var srcm = $( '.minority-status-row .product-img' ).attr('src');
            srcm =srcm.replace('small','large');
            $( '.minority-status-row .product-img' ).attr('src',srcm);
            $( '.minority-status-row .product-img' ).attr('style','width:350px; height:350px ;margin-left:300px; margin-bottom: 135px; max-height: 380%; z-index: 999');
            $( '.minority-content' ).attr('style','overflow: unset !important');
            $( '.minority-status-row .title-row' ).attr('style','font-size: 0px');
            $( '.masker-row .title' ).attr('style','font-size: 0px');
            //$( '.minority-status-row' ).attr('style','visibility: hidden');
            $( '.info-row' ).attr('style','visibility: hidden');

            $( '.hover-mask-tooltip' ).attr('style','display: contents');
            $( '.hover-mask-tooltip .user' ).attr('style','visibility: hidden');
            $( '.product-name' ).attr('style','visibility: hidden');
            $( 'img.voter-box' ).attr('style','width:0%');
            $( '.Label' ).attr('style','font-size:0px');
            $( '.hover-tag-tooltip' ).attr('style','font-size:0px;padding: 0px');

            var url2 = 'data:image/png;base64,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';
            $(`<img src='${url2}'>`).appendTo('.majority-status-row .product-name');
            $('.majority-status-row .product-name').attr('style','width:50px; height:50px; margin-bottom: 250px; margin-left:5px; font-size: 0px');

            var url3 = 'data:image/png;base64,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';
            $(`<img src='${url3}'>`).appendTo('.minority-status-row .product-name');
            $('.minority-status-row .product-name').attr('style','width:50px; height:50px; margin-bottom:300px; margin-left:-320px; font-size: 0px');
            break;

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

        case 90:
            $( '.hover-tag-tooltip' ).attr('style','width:100%; height:100%');
            $( '.product-img' ).attr('style','width:250px;height:250px');
            $( '.product-name' ).attr('style','font-size:25px;margin-left: 25%');
            $( '.voter-row' ).attr('style','margin-left:10%');
            $( 'img.voter-box' ).attr('style','font-size:25px');
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
                var a = $(".voter-info-col .product-name").html();
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

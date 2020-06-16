// ==UserScript==
// @name         Twitch CP Clicker
// @version      0.1
// @description  Click +50 channel points button on twitch.tv automatically
// @author       Nydendan
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const selector = "div > div.tw-block.tw-flex-grow-0.tw-flex-shrink-0.tw-full-height.tw-relative > div > div > div > div > section > div > div.chat-input.tw-block.tw-pd-b-1.tw-pd-x-1 > div:nth-child(2) > div.chat-input__buttons-container.tw-flex.tw-justify-content-between.tw-mg-t-1 > div:nth-child(1) > div > div > div > div.tw-full-height.tw-relative.tw-z-above > div > div > div > button";

    function clickIT(){
        var elementExists = document.querySelector(selector);
        if (elementExists){
            document.querySelector(selector).click();
            console.log("The button has been clicked.");
        }
    }

    setInterval(clickIT,5000);

})();

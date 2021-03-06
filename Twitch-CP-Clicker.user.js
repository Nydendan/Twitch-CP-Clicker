// ==UserScript==
// @name         Twitch CP Clicker
// @version      0.1.4
// @description  Click +50 channel points button on twitch.tv automatically
// @author       Nydendan
// @source       https://github.com/Nydendan/Twitch-CP-Clicker
// @downloadURL  https://github.com/Nydendan/Twitch-CP-Clicker/raw/master/Twitch-CP-Clicker.user.js
// @match        https://www.twitch.tv/*
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    function clickIT() {
        var button = document.querySelector("div.tw-full-height.tw-relative.tw-z-above > div > div > div > button")
        if (button){
            button.click();
            console.log("The button has been clicked.");
        }
    }

    try {
        setInterval(clickIT,5000);
    }

    catch (error) {
        console.error(error);
    }

})();

// ==UserScript==
// @name        Example Domain Refresher
// @namespace   Violentmonkey Scripts
// @match       https://example.com/
// @grant       none
// @version     1.0
// @author      Your Name
// @description A simple template to modify example.com background and text.
// @license     CC0 1.0
// ==/UserScript==

(function() {
    'use strict';

    // 1. Change the background color of the page body
    document.body.style.backgroundColor = "#f0f8ff";

    // 2. Change the main heading text
    const mainHeading = document.querySelector('h1');
    if (mainHeading) {
        mainHeading.textContent = "Violentmonkey is Active!";
        mainHeading.style.color = "#2e8b57";
    }

    // 3. Modify the link description
    const paragraph = document.querySelector('p');
    if (paragraph) {
        paragraph.innerHTML = "This page has been modified by a <strong>CC0 Template</strong>.";
    }

    console.log("Violentmonkey: example.com has been customized successfully.");
})();
/*  Project 01_11_04

    Author: Anthony Arias
    Date:   

    Filename: script.js
*/

"use strict";

var httpRequest = false;

function checkInput() {
 var zip = document.getElementById("zip").nodeValue;
 if (zip.length === 5) {
     getLocation();
 } else{
     document.getElementById("city").value = "";
     document.getElementById("state").value = "";
 }
}


function getRequestObject() {
    try {
        httpRequest = new XMLHttpRequest();
    } catch (requestError) {
        return false;
    }
    console.log(httpRequest);
    return httpRequest;
}


function getLocation() {
    var zip = document.getElementById("zip").value;
    if (!httpRequest) {
        httpRequest = getRequestObject();
    }
}



var zip = document.getElementById("zip");
if (zip.addEventListener) {
    zip.addEventListener("keyup", checkInput, false);
} else if (zip.attachEvent) {
    zip.attachEvent("onkeyup", checkInput);
}


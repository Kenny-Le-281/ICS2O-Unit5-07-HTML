// Created by: Kenny Le
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-07-HTML/sw.js", {
    scope: "/ICS2O-Unit5-07-HTML/",
  })
}

/**
 * This function displays an alert.
 */
function calculate() {
  // input
  var userInput = document.getElementById("user-input").value

  // process
  var answer = 0
  if (userInput < 0)
  {
    document.getElementById("answer").innerHTML = "Please input a positive whole number!"
  } else {
      for (let counter = 1; counter <= userInput; counter++) {
        answer += counter;
      }
  }
  
  // output
  document.getElementById("answer").innerHTML = "The value is " + (answer)
}

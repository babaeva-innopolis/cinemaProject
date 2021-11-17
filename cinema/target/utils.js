"use strict";

function getRandomTime(maxValue) {
  return Math.ceil(Math.random() * (maxValue + 1)) - 1;
}

function getTime(minValue, maxValue) {
  return String(minValue + getRandomTime(maxValue)).padStart(2, '0');
}
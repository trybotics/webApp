"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var appear = exports.appear = function appear() {
  return {
    scale: 0.9,
    opacity: 0
  };
};

var appeared = exports.appeared = function appeared() {
  return {
    scale: 1,
    opacity: 1
  };
};

var enter = exports.enter = appear;

var entered = exports.entered = appeared;

var leaved = exports.leaved = function leaved() {
  return {
    scale: 1.05,
    opacity: 0
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(appear, "appear", "src/animations/transitions/scale-up.js");

  __REACT_HOT_LOADER__.register(appeared, "appeared", "src/animations/transitions/scale-up.js");

  __REACT_HOT_LOADER__.register(enter, "enter", "src/animations/transitions/scale-up.js");

  __REACT_HOT_LOADER__.register(entered, "entered", "src/animations/transitions/scale-up.js");

  __REACT_HOT_LOADER__.register(leaved, "leaved", "src/animations/transitions/scale-up.js");
}();

;
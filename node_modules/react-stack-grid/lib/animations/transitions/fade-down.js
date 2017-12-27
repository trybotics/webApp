'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var appear = exports.appear = function appear(rect) {
  return {
    translateY: rect.top - 10,
    opacity: 0
  };
};
var appeared = exports.appeared = function appeared() {
  return { opacity: 1 };
};

var enter = exports.enter = appeared;

var entered = exports.entered = appeared;

var leaved = exports.leaved = function leaved(rect) {
  return {
    translateY: rect.top + 10,
    opacity: 0
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(appear, 'appear', 'src/animations/transitions/fade-down.js');

  __REACT_HOT_LOADER__.register(appeared, 'appeared', 'src/animations/transitions/fade-down.js');

  __REACT_HOT_LOADER__.register(enter, 'enter', 'src/animations/transitions/fade-down.js');

  __REACT_HOT_LOADER__.register(entered, 'entered', 'src/animations/transitions/fade-down.js');

  __REACT_HOT_LOADER__.register(leaved, 'leaved', 'src/animations/transitions/fade-down.js');
}();

;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIZE = 50;

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  return (clampedValue - min) / (max - min);
}

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline-block'
    },
    primaryColor: {
      color: theme.palette.primary[500]
    },
    accentColor: {
      color: theme.palette.secondary.A200
    },
    svgIndeterminate: {
      animation: 'mui-progress-circular-rotate 1.4s linear infinite'
    },
    svgDeterminate: {
      transform: 'rotate(-90deg)'
    },
    circle: {
      stroke: 'currentColor',
      strokeLinecap: 'round'
    },
    circleIndeterminate: {
      animation: 'mui-progress-circular-dash 1.4s ease-in-out infinite',
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80,200',
      strokeDashoffset: 0
    },
    '@keyframes mui-progress-circular-rotate': {
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes mui-progress-circular-dash': {
      '0%': {
        strokeDasharray: '1,200',
        strokeDashoffset: 0
      },
      '50%': {
        strokeDasharray: '100,200',
        strokeDashoffset: -15
      },
      '100%': {
        strokeDasharray: '100,200',
        strokeDashoffset: -120
      }
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Color = require('prop-types').oneOf(['primary', 'accent', 'inherit']);

var babelPluginFlowReactPropTypes_proptype_Mode = require('prop-types').oneOf(['determinate', 'indeterminate']);

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: require('prop-types').object,

  /**
   * @ignore
   */
  className: require('prop-types').string,

  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: require('prop-types').oneOf(['primary', 'accent', 'inherit']).isRequired,

  /**
   * The max value of progress in determinate mode.
   */
  max: require('prop-types').number.isRequired,

  /**
   * The min value of progress in determinate mode.
   */
  min: require('prop-types').number.isRequired,

  /**
   * The mode of show your progress. Indeterminate
   * for when there is no value for progress.
   * Determinate for controlled progress value.
   */
  mode: require('prop-types').oneOf(['determinate', 'indeterminate']).isRequired,

  /**
   * The size of the circle.
   */
  size: require('prop-types').number.isRequired,

  /**
   * @ignore
   */
  style: require('prop-types').object,

  /**
   * The thickness of the circle.
   */
  thickness: require('prop-types').number.isRequired,

  /**
   * The value of progress in determinate mode.
   */
  value: require('prop-types').number.isRequired
};

var CircularProgress = function (_React$Component) {
  (0, _inherits3.default)(CircularProgress, _React$Component);

  function CircularProgress() {
    (0, _classCallCheck3.default)(this, CircularProgress);
    return (0, _possibleConstructorReturn3.default)(this, (CircularProgress.__proto__ || (0, _getPrototypeOf2.default)(CircularProgress)).apply(this, arguments));
  }

  (0, _createClass3.default)(CircularProgress, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          classes = _props.classes,
          className = _props.className,
          color = _props.color,
          size = _props.size,
          style = _props.style,
          thickness = _props.thickness,
          mode = _props.mode,
          value = _props.value,
          min = _props.min,
          max = _props.max,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'color', 'size', 'style', 'thickness', 'mode', 'value', 'min', 'max']);


      var rootProps = {};

      var circleStyle = {};
      if (mode === 'determinate') {
        var relVal = getRelativeValue(value, min, max) * 100;
        var circumference = 2 * Math.PI * (SIZE / 2 - 5);

        circleStyle.strokeDashoffset = Math.round((100 - relVal) / 100 * circumference * 1000) / 1000 + 'px';
        circleStyle.strokeDasharray = Math.round(circumference * 1000) / 1000;

        rootProps['aria-valuenow'] = value;
        rootProps['aria-valuemin'] = min;
        rootProps['aria-valuemax'] = max;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)(classes.root, color !== 'inherit' && classes[color + 'Color'], className),
          style: (0, _extends3.default)({ width: size, height: size }, style),
          role: 'progressbar'
        }, rootProps, other),
        _react2.default.createElement(
          'svg',
          {
            className: (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.svgIndeterminate, mode === 'indeterminate'), (0, _defineProperty3.default)(_classNames, classes.svgDeterminate, mode === 'determinate'), _classNames)),
            viewBox: '0 0 ' + SIZE + ' ' + SIZE
          },
          _react2.default.createElement('circle', {
            className: (0, _classnames2.default)(classes.circle, (0, _defineProperty3.default)({}, classes.circleIndeterminate, mode === 'indeterminate')),
            style: circleStyle,
            cx: SIZE / 2,
            cy: SIZE / 2,
            r: SIZE / 2 - 5,
            fill: 'none',
            strokeWidth: thickness
          })
        )
      );
    }
  }]);
  return CircularProgress;
}(_react2.default.Component);

CircularProgress.defaultProps = {
  color: 'primary',
  size: 40,
  thickness: 3.6,
  mode: 'indeterminate',
  value: 0,
  min: 0,
  max: 100
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCircularProgress', flip: false })(CircularProgress);
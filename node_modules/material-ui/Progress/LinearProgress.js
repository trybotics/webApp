'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRANSITION_DURATION = 4; // 400ms

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 5
    },
    primaryColor: {
      backgroundColor: theme.palette.primary[100]
    },
    primaryColorBar: {
      backgroundColor: theme.palette.primary[500]
    },
    primaryDashed: {
      background: 'radial-gradient(' + theme.palette.primary[100] + ' 0%, ' + theme.palette.primary[100] + ' 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },
    accentColor: {
      backgroundColor: theme.palette.secondary.A100
    },
    accentColorBar: {
      backgroundColor: theme.palette.secondary.A400
    },
    accentDashed: {
      background: 'radial-gradient(' + theme.palette.secondary.A100 + ' 0%, ' + theme.palette.secondary.A100 + ' 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },
    bar: {
      width: '100%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      transformOrigin: 'left'
    },
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      animation: 'buffer 3s infinite linear'
    },
    bufferBar2: {
      transition: 'transform .' + TRANSITION_DURATION + 's linear'
    },
    rootBuffer: {
      backgroundColor: 'transparent'
    },
    rootQuery: {
      transform: 'rotate(180deg)'
    },
    indeterminateBar1: {
      width: 'auto',
      willChange: 'left, right',
      animation: 'mui-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },
    indeterminateBar2: {
      width: 'auto',
      willChange: 'left, right',
      animation: 'mui-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
      animationDelay: '1.15s'
    },
    determinateBar1: {
      willChange: 'transform',
      transition: 'transform .' + TRANSITION_DURATION + 's linear'
    },
    bufferBar1: {
      zIndex: 1,
      transition: 'transform .' + TRANSITION_DURATION + 's linear'
    },
    bufferBar2Primary: {
      transition: 'transform .' + TRANSITION_DURATION + 's linear',
      backgroundColor: theme.palette.primary[100]
    },
    bufferBar2Accent: {
      transition: 'transform .' + TRANSITION_DURATION + 's linear',
      backgroundColor: theme.palette.secondary.A100
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    '@keyframes mui-indeterminate1': {
      //  |-----|---x-||-----||-----|
      '0%': {
        left: '-35%',
        right: '100%'
      },
      //  |-----|-----||-----||xxxx-|
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes mui-indeterminate2': {
      //  |xxxxx|xxxxx||-----||-----|
      '0%': {
        left: '-200%',
        right: '100%'
      },
      //  |-----|-----||-----||-x----|
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0px -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0px -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    }
  };
};

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
  color: require('prop-types').oneOf(['primary', 'accent']).isRequired,

  /**
   * The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: require('prop-types').oneOf(['determinate', 'indeterminate', 'buffer', 'query']).isRequired,

  /**
   * The value of progress, only works in determinate and buffer mode.
   * Value between 0 and 100.
   */
  value: require('prop-types').number,

  /**
   * The value of buffer, only works in buffer mode.
   * Value between 0 and 100.
   */
  valueBuffer: require('prop-types').number
};

var LinearProgress = function (_React$Component) {
  (0, _inherits3.default)(LinearProgress, _React$Component);

  function LinearProgress() {
    (0, _classCallCheck3.default)(this, LinearProgress);
    return (0, _possibleConstructorReturn3.default)(this, (LinearProgress.__proto__ || (0, _getPrototypeOf2.default)(LinearProgress)).apply(this, arguments));
  }

  (0, _createClass3.default)(LinearProgress, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames2, _classNames3, _classNames4;

      var _props = this.props,
          classes = _props.classes,
          className = _props.className,
          color = _props.color,
          mode = _props.mode,
          value = _props.value,
          valueBuffer = _props.valueBuffer,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'color', 'mode', 'value', 'valueBuffer']);


      var dashedClass = (0, _classnames2.default)(classes.dashed, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.primaryDashed, color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.accentDashed, color === 'accent'), _classNames));

      var rootClassName = (0, _classnames2.default)(classes.root, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.primaryColor, color === 'primary'), (0, _defineProperty3.default)(_classNames2, classes.accentColor, color === 'accent'), (0, _defineProperty3.default)(_classNames2, classes.rootBuffer, mode === 'buffer'), (0, _defineProperty3.default)(_classNames2, classes.rootQuery, mode === 'query'), _classNames2), className);
      var primaryClassName = (0, _classnames2.default)(classes.bar, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, classes.primaryColorBar, color === 'primary'), (0, _defineProperty3.default)(_classNames3, classes.accentColorBar, color === 'accent'), (0, _defineProperty3.default)(_classNames3, classes.indeterminateBar1, mode === 'indeterminate' || mode === 'query'), (0, _defineProperty3.default)(_classNames3, classes.determinateBar1, mode === 'determinate'), (0, _defineProperty3.default)(_classNames3, classes.bufferBar1, mode === 'buffer'), _classNames3));
      var secondaryClassName = (0, _classnames2.default)(classes.bar, (_classNames4 = {}, (0, _defineProperty3.default)(_classNames4, classes.bufferBar2, mode === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.primaryColorBar, color === 'primary' && mode !== 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.primaryColor, color === 'primary' && mode === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.accentColorBar, color === 'accent' && mode !== 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.accentColor, color === 'accent' && mode === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.indeterminateBar2, mode === 'indeterminate' || mode === 'query'), _classNames4));
      var inlineStyles = { primary: {}, secondary: {} };
      var rootProps = {};

      if (mode === 'determinate') {
        if (value !== undefined) {
          inlineStyles.primary.transform = 'scaleX(' + value / 100 + ')';
          rootProps['aria-valuenow'] = Math.round(value);
        } else {
          process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: you need to provide a value property ' + 'when LinearProgress is in determinate mode.') : void 0;
        }
      } else if (mode === 'buffer') {
        if (value !== undefined) {
          inlineStyles.primary.transform = 'scaleX(' + value / 100 + ')';
          inlineStyles.secondary.transform = 'scaleX(' + (valueBuffer || 0) / 100 + ')';
        } else {
          process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: you need to provide a value property when LinearProgress is ' + 'in buffer mode.') : void 0;
        }
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rootClassName }, rootProps, other),
        mode === 'buffer' ? _react2.default.createElement('div', { className: dashedClass }) : null,
        _react2.default.createElement('div', { className: primaryClassName, style: inlineStyles.primary }),
        mode === 'determinate' ? null : _react2.default.createElement('div', { className: secondaryClassName, style: inlineStyles.secondary })
      );
    }
  }]);
  return LinearProgress;
}(_react2.default.Component);

LinearProgress.defaultProps = {
  color: 'primary',
  mode: 'indeterminate'
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiLinearProgress' })(LinearProgress);
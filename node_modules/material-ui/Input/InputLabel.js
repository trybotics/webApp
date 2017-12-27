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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Form = require('../Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      transformOrigin: 'top left'
    },
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: 'translate(0, ' + (theme.spacing.unit * 3 - 1) + 'px) scale(1)'
    },
    labelDense: {
      // Compensation for the `Input.inputDense` style.
      transform: 'translate(0, ' + (theme.spacing.unit * 2.5 + 1) + 'px) scale(1)'
    },
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    },
    animated: {
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },
    disabled: {
      color: theme.palette.input.disabled
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * The contents of the `InputLabel`.
   */
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node),

  /**
   * Useful to extend the style applied to components.
   */
  classes: require('prop-types').object,

  /**
   * @ignore
   */
  className: require('prop-types').string,

  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: require('prop-types').bool.isRequired,

  /**
   * If `true`, apply disabled class.
   */
  disabled: require('prop-types').bool.isRequired,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: require('prop-types').bool,

  /**
   * `classes` property applied to the `FormControl` element.
   */
  FormControlClasses: require('prop-types').object,

  /**
   * If `true`, the input of this label is focused.
   */
  focused: require('prop-types').bool,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: require('prop-types').oneOf(['dense']),

  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: require('prop-types').bool,

  /**
   * If `true`, the label is shrunk.
   */
  shrink: require('prop-types').bool
};

var InputLabel = function (_React$Component) {
  (0, _inherits3.default)(InputLabel, _React$Component);

  function InputLabel() {
    (0, _classCallCheck3.default)(this, InputLabel);
    return (0, _possibleConstructorReturn3.default)(this, (InputLabel.__proto__ || (0, _getPrototypeOf2.default)(InputLabel)).apply(this, arguments));
  }

  (0, _createClass3.default)(InputLabel, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          disabled = _props.disabled,
          disableAnimation = _props.disableAnimation,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          FormControlClasses = _props.FormControlClasses,
          shrinkProp = _props.shrink,
          marginProp = _props.margin,
          other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'disableAnimation', 'children', 'classes', 'className', 'FormControlClasses', 'shrink', 'margin']);
      var muiFormControl = this.context.muiFormControl;

      var shrink = shrinkProp;

      if (typeof shrink === 'undefined' && muiFormControl) {
        shrink = muiFormControl.dirty || muiFormControl.focused || muiFormControl.adornedStart;
      }

      var margin = marginProp;
      if (typeof margin === 'undefined' && muiFormControl) {
        margin = muiFormControl.margin;
      }

      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty3.default)(_classNames, classes.animated, !disableAnimation), (0, _defineProperty3.default)(_classNames, classes.shrink, shrink), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.labelDense, margin === 'dense'), _classNames), classNameProp);

      return _react2.default.createElement(
        _Form.FormLabel,
        (0, _extends3.default)({ 'data-shrink': shrink, className: className, classes: FormControlClasses }, other),
        children
      );
    }
  }]);
  return InputLabel;
}(_react2.default.Component);

InputLabel.defaultProps = {
  disabled: false,
  disableAnimation: false
};
InputLabel.contextTypes = {
  muiFormControl: _propTypes2.default.object
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiInputLabel' })(InputLabel);
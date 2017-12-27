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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_ElementType = require('react').babelPluginFlowReactPropTypes_proptype_ElementType || require('prop-types').any;

var styles = exports.styles = function styles(theme) {
  var focusColor = theme.palette.primary[theme.palette.type === 'light' ? 'A700' : 'A200'];
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.input.labelText,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 1,
      padding: 0
    },
    focused: {
      color: focusColor
    },
    error: {
      color: theme.palette.error.A400
    },
    disabled: {
      color: theme.palette.input.disabled
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * The content of the component.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: typeof babelPluginFlowReactPropTypes_proptype_ElementType === 'function' ? babelPluginFlowReactPropTypes_proptype_ElementType.isRequired ? babelPluginFlowReactPropTypes_proptype_ElementType.isRequired : babelPluginFlowReactPropTypes_proptype_ElementType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ElementType).isRequired,

  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: require('prop-types').bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: require('prop-types').bool,

  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: require('prop-types').bool,

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: require('prop-types').bool
};

var FormLabel = function (_React$Component) {
  (0, _inherits3.default)(FormLabel, _React$Component);

  function FormLabel() {
    (0, _classCallCheck3.default)(this, FormLabel);
    return (0, _possibleConstructorReturn3.default)(this, (FormLabel.__proto__ || (0, _getPrototypeOf2.default)(FormLabel)).apply(this, arguments));
  }

  (0, _createClass3.default)(FormLabel, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          Component = _props.component,
          disabledProp = _props.disabled,
          errorProp = _props.error,
          focusedProp = _props.focused,
          requiredProp = _props.required,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'component', 'disabled', 'error', 'focused', 'required']);
      var muiFormControl = this.context.muiFormControl;


      var required = requiredProp;
      var focused = focusedProp;
      var disabled = disabledProp;
      var error = errorProp;

      if (muiFormControl) {
        if (typeof required === 'undefined') {
          required = muiFormControl.required;
        }
        if (typeof focused === 'undefined') {
          focused = muiFormControl.focused;
        }
        if (typeof disabled === 'undefined') {
          disabled = muiFormControl.disabled;
        }
        if (typeof error === 'undefined') {
          error = muiFormControl.error;
        }
      }

      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.focused, focused), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.error, error), _classNames), classNameProp);

      var asteriskClassName = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.error, error));

      return _react2.default.createElement(
        Component,
        (0, _extends3.default)({ className: className }, other),
        children,
        required && _react2.default.createElement(
          'span',
          { className: asteriskClassName },
          '\u2009*'
        )
      );
    }
  }]);
  return FormLabel;
}(_react2.default.Component);

FormLabel.contextTypes = {
  muiFormControl: _propTypes2.default.object
};
FormLabel.defaultProps = {
  component: 'label'
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiFormLabel' })(FormLabel);
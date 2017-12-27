'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

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

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any; //  weak

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: 56,
      backgroundColor: theme.palette.background.paper
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * The content of the component.
   */
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node.isRequired ? babelPluginFlowReactPropTypes_proptype_Node.isRequired : babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node).isRequired,

  /**
   * @ignore
   */
  className: require('prop-types').string,

  /**
   * Useful to extend the style applied to components.
   */
  classes: require('prop-types').object,

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child
   */
  onChange: require('prop-types').func,

  /**
   * If `true`, all `BottomNavigationButton`s will show their labels.
   * By default only the selected `BottomNavigationButton` will show its label.
   */
  showLabels: require('prop-types').bool.isRequired,

  /**
   * The value of the currently selected `BottomNavigationButton`.
   */
  value: function value(props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error('Prop `' + propName + '` has type \'any\' or \'mixed\', but was not provided to `' + componentName + '`. Pass undefined or any other value.');
    }
  }
};

var BottomNavigation = function (_React$Component) {
  (0, _inherits3.default)(BottomNavigation, _React$Component);

  function BottomNavigation() {
    (0, _classCallCheck3.default)(this, BottomNavigation);
    return (0, _possibleConstructorReturn3.default)(this, (BottomNavigation.__proto__ || (0, _getPrototypeOf2.default)(BottomNavigation)).apply(this, arguments));
  }

  (0, _createClass3.default)(BottomNavigation, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          childrenProp = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          onChange = _props.onChange,
          showLabels = _props.showLabels,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'onChange', 'showLabels', 'value']);


      var className = (0, _classnames2.default)(classes.root, classNameProp);

      var children = _react2.default.Children.map(childrenProp, function (child, childIndex) {
        if (!_react2.default.isValidElement(child)) return null;
        var childValue = child.props.value || childIndex;
        return _react2.default.cloneElement(child, {
          selected: childValue === value,
          showLabel: child.props.showLabel !== undefined ? child.props.showLabel : showLabels,
          value: childValue,
          onChange: onChange
        });
      });

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: className }, other),
        children
      );
    }
  }]);
  return BottomNavigation;
}(_react2.default.Component);

BottomNavigation.defaultProps = {
  showLabels: false
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiBottomNavigation' })(BottomNavigation);
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

var _Typography = require('../Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any; //  weak

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      flex: '1 1 auto',
      padding: '0 16px',
      '&:first-child': {
        paddingLeft: 0
      }
    },
    inset: {
      '&:first-child': {
        paddingLeft: theme.spacing.unit * 7
      }
    },
    dense: {
      fontSize: theme.typography.pxToRem(13)
    },
    text: {}, // Present to allow external customization
    textDense: {
      fontSize: 'inherit'
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
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, that can be useful to can render an h4 instead of a
   */
  disableTypography: require('prop-types').bool.isRequired,

  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: require('prop-types').bool.isRequired,
  primary: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node.isRequired ? babelPluginFlowReactPropTypes_proptype_Node.isRequired : babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node).isRequired,
  secondary: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node.isRequired ? babelPluginFlowReactPropTypes_proptype_Node.isRequired : babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node).isRequired
};

var ListItemText = function (_React$Component) {
  (0, _inherits3.default)(ListItemText, _React$Component);

  function ListItemText() {
    (0, _classCallCheck3.default)(this, ListItemText);
    return (0, _possibleConstructorReturn3.default)(this, (ListItemText.__proto__ || (0, _getPrototypeOf2.default)(ListItemText)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListItemText, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          disableTypography = _props.disableTypography,
          primary = _props.primary,
          secondary = _props.secondary,
          inset = _props.inset,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'disableTypography', 'primary', 'secondary', 'inset']);
      var dense = this.context.dense;

      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.dense, dense), (0, _defineProperty3.default)(_classNames, classes.inset, inset), _classNames), classNameProp);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: className }, other),
        primary && (disableTypography ? primary : _react2.default.createElement(
          _Typography2.default,
          {
            type: 'subheading',
            className: (0, _classnames2.default)(classes.text, (0, _defineProperty3.default)({}, classes.textDense, dense))
          },
          primary
        )),
        secondary && (disableTypography ? secondary : _react2.default.createElement(
          _Typography2.default,
          {
            color: 'secondary',
            type: 'body1',
            className: (0, _classnames2.default)(classes.text, (0, _defineProperty3.default)({}, classes.textDense, dense))
          },
          secondary
        ))
      );
    }
  }]);
  return ListItemText;
}(_react2.default.Component);

ListItemText.defaultProps = {
  disableTypography: false,
  primary: false,
  secondary: false,
  inset: false
};
ListItemText.contextTypes = {
  dense: _propTypes2.default.bool
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiListItemText' })(ListItemText);
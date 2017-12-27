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

var babelPluginFlowReactPropTypes_proptype_ElementType = require('react').babelPluginFlowReactPropTypes_proptype_ElementType || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      color: 'inherit',
      display: 'table-row',
      height: 48,
      '&:focus': {
        outline: 'none'
      },
      verticalAlign: 'middle'
    },
    head: {
      height: 56
    },
    footer: {
      height: 56
    },
    hover: {
      '&:hover': {
        background: theme.palette.background.contentFrame
      }
    },
    selected: {
      background: theme.palette.background.appBar
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Context = {
  table: require('prop-types').object.isRequired
};
var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * Should be valid `<tr>` children such as `TableCell`.
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
   * If `true`, the table row will shade on hover.
   */
  hover: require('prop-types').bool.isRequired,

  /**
   * If `true`, the table row will have the selected shading.
   */
  selected: require('prop-types').bool.isRequired
};

/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */
var TableRow = function (_React$Component) {
  (0, _inherits3.default)(TableRow, _React$Component);

  function TableRow() {
    (0, _classCallCheck3.default)(this, TableRow);
    return (0, _possibleConstructorReturn3.default)(this, (TableRow.__proto__ || (0, _getPrototypeOf2.default)(TableRow)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableRow, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          children = _props.children,
          Component = _props.component,
          hover = _props.hover,
          selected = _props.selected,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'children', 'component', 'hover', 'selected']);
      var table = this.context.table;


      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.head, table && table.head), (0, _defineProperty3.default)(_classNames, classes.footer, table && table.footer), (0, _defineProperty3.default)(_classNames, classes.hover, table && hover), (0, _defineProperty3.default)(_classNames, classes.selected, table && selected), _classNames), classNameProp);

      return _react2.default.createElement(
        Component,
        (0, _extends3.default)({ className: className }, other),
        children
      );
    }
  }]);
  return TableRow;
}(_react2.default.Component);

TableRow.defaultProps = {
  hover: false,
  selected: false,
  component: 'tr'
};
TableRow.contextTypes = {
  table: _propTypes2.default.object
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTableRow' })(TableRow);
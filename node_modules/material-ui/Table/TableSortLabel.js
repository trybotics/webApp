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

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = require('../ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _ArrowDownward = require('../svg-icons/ArrowDownward');

var _ArrowDownward2 = _interopRequireDefault(_ArrowDownward);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;
// @inheritedComponent ButtonBase

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      cursor: 'pointer',
      display: 'inline-flex',
      justifyContent: 'flex-start',
      flexDirection: 'inherit',
      alignItems: 'center',
      '&:hover': {
        color: theme.palette.text.primary
      },
      '&:focus': {
        color: theme.palette.text.primary
      }
    },
    active: {
      color: theme.palette.text.primary,
      '& $icon': {
        opacity: 1
      }
    },
    icon: {
      height: 16,
      marginRight: 4,
      marginLeft: 4,
      opacity: 0,
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shorter
      }),
      userSelect: 'none',
      width: 16
    },
    desc: {
      transform: 'rotate(0deg)'
    },
    asc: {
      transform: 'rotate(180deg)'
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Direction = require('prop-types').oneOf(['asc', 'desc']);

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * If `true`, the label will have the active styling (should be true for the sorted column).
   */
  active: require('prop-types').bool.isRequired,

  /**
   * Label contents, the arrow will be appended automatically.
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
   * The current sort direction.
   */
  direction: require('prop-types').oneOf(['asc', 'desc']).isRequired
};

/**
 * A button based label for placing inside `TableCell` for column sorting.
 */
var TableSortLabel = function (_React$Component) {
  (0, _inherits3.default)(TableSortLabel, _React$Component);

  function TableSortLabel() {
    (0, _classCallCheck3.default)(this, TableSortLabel);
    return (0, _possibleConstructorReturn3.default)(this, (TableSortLabel.__proto__ || (0, _getPrototypeOf2.default)(TableSortLabel)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableSortLabel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          classes = _props.classes,
          classNameProp = _props.className,
          children = _props.children,
          direction = _props.direction,
          other = (0, _objectWithoutProperties3.default)(_props, ['active', 'classes', 'className', 'children', 'direction']);

      var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.active, active), classNameProp);

      var iconClassName = (0, _classnames2.default)(classes.icon, (0, _defineProperty3.default)({}, classes[direction], !!direction));

      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends3.default)({ className: className, component: 'span', disableRipple: true }, other),
        children,
        _react2.default.createElement(_ArrowDownward2.default, { className: iconClassName })
      );
    }
  }]);
  return TableSortLabel;
}(_react2.default.Component);

TableSortLabel.defaultProps = {
  active: false,
  direction: 'desc'
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTableSortLabel' })(TableSortLabel);
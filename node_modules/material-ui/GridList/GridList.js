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

var babelPluginFlowReactPropTypes_proptype_ElementType = require('react').babelPluginFlowReactPropTypes_proptype_ElementType || require('prop-types').any;

var styles = exports.styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.
  }
};

var babelPluginFlowReactPropTypes_proptype_CellHeight = require('prop-types').oneOfType([require('prop-types').number, require('prop-types').oneOf(['auto'])]);

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: require('prop-types').oneOfType([require('prop-types').number, require('prop-types').oneOf(['auto'])]).isRequired,

  /**
   * Grid Tiles that will be in Grid List.
   */
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node.isRequired ? babelPluginFlowReactPropTypes_proptype_Node.isRequired : babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node).isRequired,

  /**
   * Useful to extend the style applied to components.
   */
  classes: require('prop-types').object,

  /**
   * @ignore
   */
  className: require('prop-types').string,

  /**
   * Number of columns.
   */
  cols: require('prop-types').number.isRequired,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default we map the type to a good default headline component.
   */
  component: typeof babelPluginFlowReactPropTypes_proptype_ElementType === 'function' ? babelPluginFlowReactPropTypes_proptype_ElementType.isRequired ? babelPluginFlowReactPropTypes_proptype_ElementType.isRequired : babelPluginFlowReactPropTypes_proptype_ElementType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ElementType).isRequired,

  /**
   * Number of px for the spacing between tiles.
   */
  spacing: require('prop-types').number.isRequired,

  /**
   * @ignore
   */
  style: require('prop-types').object
};

var GridList = function (_React$Component) {
  (0, _inherits3.default)(GridList, _React$Component);

  function GridList() {
    (0, _classCallCheck3.default)(this, GridList);
    return (0, _possibleConstructorReturn3.default)(this, (GridList.__proto__ || (0, _getPrototypeOf2.default)(GridList)).apply(this, arguments));
  }

  (0, _createClass3.default)(GridList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cols = _props.cols,
          spacing = _props.spacing,
          cellHeight = _props.cellHeight,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          ComponentProp = _props.component,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['cols', 'spacing', 'cellHeight', 'children', 'classes', 'className', 'component', 'style']);


      return _react2.default.createElement(
        ComponentProp,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(classes.root, classNameProp),
          style: (0, _extends3.default)({ margin: -spacing / 2 }, style)
        }, other),
        _react2.default.Children.map(children, function (currentChild) {
          var childCols = currentChild.props.cols || 1;
          var childRows = currentChild.props.rows || 1;

          return _react2.default.cloneElement(currentChild, {
            style: (0, _extends3.default)({
              width: 100 / cols * childCols + '%',
              height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
              padding: spacing / 2
            }, currentChild.props.style)
          });
        })
      );
    }
  }]);
  return GridList;
}(_react2.default.Component);

GridList.defaultProps = {
  cols: 2,
  spacing: 4,
  cellHeight: 180,
  component: 'ul'
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiGridList' })(GridList);
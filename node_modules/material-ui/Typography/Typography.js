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

var _helpers = require('../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_ElementType = require('react').babelPluginFlowReactPropTypes_proptype_ElementType || require('prop-types').any;

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'block',
      margin: 0
    },
    display4: theme.typography.display4,
    display3: theme.typography.display3,
    display2: theme.typography.display2,
    display1: theme.typography.display1,
    headline: theme.typography.headline,
    title: theme.typography.title,
    subheading: theme.typography.subheading,
    body2: theme.typography.body2,
    body1: theme.typography.body1,
    caption: theme.typography.caption,
    button: theme.typography.button,
    alignLeft: {
      textAlign: 'left'
    },
    alignCenter: {
      textAlign: 'center'
    },
    alignRight: {
      textAlign: 'right'
    },
    alignJustify: {
      textAlign: 'justify'
    },
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    gutterBottom: {
      marginBottom: '0.35em'
    },
    paragraph: {
      marginBottom: theme.spacing.unit * 2
    },
    colorInherit: {
      color: 'inherit'
    },
    colorPrimary: {
      color: theme.palette.primary[500]
    },
    colorSecondary: {
      color: theme.palette.text.secondary
    },
    colorAccent: {
      color: theme.palette.secondary.A400
    },
    colorError: {
      color: theme.palette.error.A400
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Type = require('prop-types').oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button']);

var babelPluginFlowReactPropTypes_proptype_Props = {
  align: require('prop-types').oneOf(['inherit', 'left', 'center', 'right', 'justify']).isRequired,
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
   * By default we map the type to a good default headline component.
   */
  component: typeof babelPluginFlowReactPropTypes_proptype_ElementType === 'function' ? babelPluginFlowReactPropTypes_proptype_ElementType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ElementType),

  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: require('prop-types').oneOf(['inherit', 'primary', 'secondary', 'accent', 'error', 'default']).isRequired,

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: require('prop-types').bool.isRequired,

  /**
   * We are empirically mapping the type property to a range of different DOM element type.
   * For instance, h1 to h6. If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   */
  headlineMapping: require('prop-types').shape({}).isRequired,

  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: require('prop-types').bool.isRequired,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: require('prop-types').bool.isRequired,

  /**
   * Applies the theme typography styles.
   */
  type: require('prop-types').oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button']).isRequired
};

var Typography = function (_React$Component) {
  (0, _inherits3.default)(Typography, _React$Component);

  function Typography() {
    (0, _classCallCheck3.default)(this, Typography);
    return (0, _possibleConstructorReturn3.default)(this, (Typography.__proto__ || (0, _getPrototypeOf2.default)(Typography)).apply(this, arguments));
  }

  (0, _createClass3.default)(Typography, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          align = _props.align,
          classes = _props.classes,
          classNameProp = _props.className,
          componentProp = _props.component,
          color = _props.color,
          gutterBottom = _props.gutterBottom,
          headlineMapping = _props.headlineMapping,
          noWrap = _props.noWrap,
          paragraph = _props.paragraph,
          type = _props.type,
          other = (0, _objectWithoutProperties3.default)(_props, ['align', 'classes', 'className', 'component', 'color', 'gutterBottom', 'headlineMapping', 'noWrap', 'paragraph', 'type']);


      var className = (0, _classnames2.default)(classes.root, classes[type], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes['color' + (0, _helpers.capitalizeFirstLetter)(color)], color !== 'default'), (0, _defineProperty3.default)(_classNames, classes.noWrap, noWrap), (0, _defineProperty3.default)(_classNames, classes.gutterBottom, gutterBottom), (0, _defineProperty3.default)(_classNames, classes.paragraph, paragraph), (0, _defineProperty3.default)(_classNames, classes['align' + (0, _helpers.capitalizeFirstLetter)(align)], align !== 'inherit'), _classNames), classNameProp);

      var Component = componentProp || (paragraph ? 'p' : headlineMapping[type]) || 'span';

      return _react2.default.createElement(Component, (0, _extends3.default)({ className: className }, other));
    }
  }]);
  return Typography;
}(_react2.default.Component);

Typography.defaultProps = {
  align: 'inherit',
  color: 'default',
  gutterBottom: false,
  headlineMapping: {
    display4: 'h1',
    display3: 'h1',
    display2: 'h1',
    display1: 'h1',
    headline: 'h1',
    title: 'h2',
    subheading: 'h3',
    body2: 'aside',
    body1: 'p'
  },
  noWrap: false,
  paragraph: false,
  type: 'body1'
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTypography' })(Typography);
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

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_ElementType = require('react').babelPluginFlowReactPropTypes_proptype_ElementType || require('prop-types').any;

var styles = exports.styles = {
  root: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  rootMedia: {
    width: '100%'
  }
};

var mediaComponents = ['video', 'audio', 'picture', 'iframe', 'img'];

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
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: require('prop-types').string,

  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: require('prop-types').string,

  /**
   * @ignore
   */
  style: require('prop-types').object,

  /**
   * Component for rendering image.
   */
  component: typeof babelPluginFlowReactPropTypes_proptype_ElementType === 'function' ? babelPluginFlowReactPropTypes_proptype_ElementType.isRequired ? babelPluginFlowReactPropTypes_proptype_ElementType.isRequired : babelPluginFlowReactPropTypes_proptype_ElementType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ElementType).isRequired
};

var CardMedia = function (_React$Component) {
  (0, _inherits3.default)(CardMedia, _React$Component);

  function CardMedia() {
    (0, _classCallCheck3.default)(this, CardMedia);
    return (0, _possibleConstructorReturn3.default)(this, (CardMedia.__proto__ || (0, _getPrototypeOf2.default)(CardMedia)).apply(this, arguments));
  }

  (0, _createClass3.default)(CardMedia, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          classes = _props.classes,
          className = _props.className,
          image = _props.image,
          style = _props.style,
          src = _props.src,
          ComponentProp = _props.component,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'image', 'style', 'src', 'component']);


      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(Boolean(image || src), 'Material-UI: either `image` or `src` property must be specified.') : void 0;

      var isMediaComponent = mediaComponents.indexOf(ComponentProp) !== -1;
      var composedStyle = !isMediaComponent && image ? (0, _extends3.default)({ backgroundImage: 'url(' + image + ')' }, style) : style;
      var composedClassName = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.root, !isMediaComponent), (0, _defineProperty3.default)(_classNames, classes.rootMedia, isMediaComponent), _classNames), className);

      return _react2.default.createElement(ComponentProp, (0, _extends3.default)({
        className: composedClassName,
        style: composedStyle,
        src: isMediaComponent ? image || src : undefined
      }, other));
    }
  }]);
  return CardMedia;
}(_react2.default.Component);

CardMedia.defaultProps = {
  component: 'div'
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCardMedia' })(CardMedia);
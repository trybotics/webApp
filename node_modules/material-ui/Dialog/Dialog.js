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

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Fade = require('../transitions/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _transitions = require('../styles/transitions');

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;
// @inheritedComponent Modal

var babelPluginFlowReactPropTypes_proptype_ComponentType = require('prop-types').func;

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('../internal/transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_TransitionDuration = require('../internal/transition').babelPluginFlowReactPropTypes_proptype_TransitionDuration || require('prop-types').any;

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    paper: {
      display: 'flex',
      margin: theme.spacing.unit * 4,
      flexDirection: 'column',
      flex: '0 1 auto',
      position: 'relative',
      maxHeight: '90vh',
      overflowY: 'auto', // Fix IE11 issue, to remove at some point.
      '&:focus': {
        outline: 'none'
      }
    },
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 360)
    },
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm
    },
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md
    },
    fullWidth: {
      width: '100%'
    },
    fullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: '100%',
      borderRadius: 0
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * Dialog children, usually the included sub-components.
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
   * If `true`, it will be full-screen
   */
  fullScreen: require('prop-types').bool.isRequired,

  /**
   * If `true`, clicking the backdrop will not fire the `onRequestClose` callback.
   */
  ignoreBackdropClick: require('prop-types').bool.isRequired,

  /**
   * If `true`, hitting escape will not fire the `onRequestClose` callback.
   */
  ignoreEscapeKeyUp: require('prop-types').bool.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: typeof babelPluginFlowReactPropTypes_proptype_TransitionDuration === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionDuration.isRequired ? babelPluginFlowReactPropTypes_proptype_TransitionDuration.isRequired : babelPluginFlowReactPropTypes_proptype_TransitionDuration : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionDuration).isRequired,

  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application.
   */
  maxWidth: require('prop-types').oneOf(['xs', 'sm', 'md']).isRequired,

  /**
   * If specified, stretches dialog to max width.
   */
  fullWidth: require('prop-types').bool.isRequired,

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: require('prop-types').func,

  /**
   * Callback fired before the dialog enters.
   */
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),

  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),

  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),

  /**
   * Callback fires when the escape key is released and the modal is in focus.
   */
  onEscapeKeyUp: require('prop-types').func,

  /**
   * Callback fired before the dialog exits.
   */
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),

  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),

  /**
   * Callback fired when the dialog has exited.
   */
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onRequestClose: require('prop-types').func,

  /**
   * If `true`, the Dialog is open.
   */
  open: require('prop-types').bool.isRequired,

  /**
   * Transition component.
   */
  transition: typeof babelPluginFlowReactPropTypes_proptype_ComponentType === 'function' ? babelPluginFlowReactPropTypes_proptype_ComponentType.isRequired ? babelPluginFlowReactPropTypes_proptype_ComponentType.isRequired : babelPluginFlowReactPropTypes_proptype_ComponentType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ComponentType).isRequired
};

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */
var Dialog = function (_React$Component) {
  (0, _inherits3.default)(Dialog, _React$Component);

  function Dialog() {
    (0, _classCallCheck3.default)(this, Dialog);
    return (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).apply(this, arguments));
  }

  (0, _createClass3.default)(Dialog, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          fullScreen = _props.fullScreen,
          ignoreBackdropClick = _props.ignoreBackdropClick,
          ignoreEscapeKeyUp = _props.ignoreEscapeKeyUp,
          transitionDuration = _props.transitionDuration,
          maxWidth = _props.maxWidth,
          fullWidth = _props.fullWidth,
          open = _props.open,
          onBackdropClick = _props.onBackdropClick,
          onEscapeKeyUp = _props.onEscapeKeyUp,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onEntered = _props.onEntered,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          onExited = _props.onExited,
          onRequestClose = _props.onRequestClose,
          TransitionProp = _props.transition,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'fullScreen', 'ignoreBackdropClick', 'ignoreEscapeKeyUp', 'transitionDuration', 'maxWidth', 'fullWidth', 'open', 'onBackdropClick', 'onEscapeKeyUp', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'onRequestClose', 'transition']);


      return _react2.default.createElement(
        _Modal2.default,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(classes.root, className),
          BackdropTransitionDuration: transitionDuration,
          ignoreBackdropClick: ignoreBackdropClick,
          ignoreEscapeKeyUp: ignoreEscapeKeyUp,
          onBackdropClick: onBackdropClick,
          onEscapeKeyUp: onEscapeKeyUp,
          onRequestClose: onRequestClose,
          show: open
        }, other),
        _react2.default.createElement(
          TransitionProp,
          {
            appear: true,
            'in': open,
            timeout: transitionDuration,
            onEnter: onEnter,
            onEntering: onEntering,
            onEntered: onEntered,
            onExit: onExit,
            onExiting: onExiting,
            onExited: onExited
          },
          _react2.default.createElement(
            _Paper2.default,
            {
              elevation: 24,
              className: (0, _classnames2.default)(classes.paper, classes['paperWidth' + (0, _helpers.capitalizeFirstLetter)(maxWidth)], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.fullScreen, fullScreen), (0, _defineProperty3.default)(_classNames, classes.fullWidth, fullWidth), _classNames))
            },
            children
          )
        )
      );
    }
  }]);
  return Dialog;
}(_react2.default.Component);

Dialog.defaultProps = {
  fullScreen: false,
  ignoreBackdropClick: false,
  ignoreEscapeKeyUp: false,
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  },
  maxWidth: 'sm',
  fullWidth: false,
  open: false,
  transition: _Fade2.default
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialog' })(Dialog);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {
    height: 1,
    margin: 0, // Reset browser default style.
    border: 'none',
    flexShrink: 0
  },
  default: {
    backgroundColor: theme.palette.text.divider
  },
  inset: {
    marginLeft: 72
  },
  light: {
    backgroundColor: theme.palette.text.lightDivider
  },
  absolute: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  }
});

class Divider extends React.Component {

  render() {
    const _props = this.props,
          { absolute, classes, className: classNameProp, inset, light } = _props,
          other = _objectWithoutProperties(_props, ['absolute', 'classes', 'className', 'inset', 'light']);

    const className = classNames(classes.root, {
      [classes.absolute]: absolute,
      [classes.inset]: inset,
      [light ? classes.light : classes.default]: true
    }, classNameProp);

    return React.createElement('hr', _extends({ className: className }, other));
  }
}

Divider.defaultProps = {
  absolute: false,
  inset: false,
  light: false
};
export default withStyles(styles, { name: 'MuiDivider' })(Divider);
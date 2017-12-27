var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//  weak

import React from 'react';

import withStyles from '../styles/withStyles';
import SwitchBase from '../internal/SwitchBase';
import RadioButtonCheckedIcon from '../svg-icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '../svg-icons/RadioButtonUnchecked';

export const styles = theme => ({
  default: {
    color: theme.palette.text.secondary
  },
  checked: {
    color: theme.palette.primary[500]
  },
  disabled: {
    color: theme.palette.action.disabled
  }
});

// eslint-disable-next-line no-unused-vars
const Radio = props => React.createElement(SwitchBase, _extends({
  inputType: 'radio',
  icon: React.createElement(RadioButtonUncheckedIcon, null),
  checkedIcon: React.createElement(RadioButtonCheckedIcon, null)
}, props));

Radio.displayName = 'Radio';

export default withStyles(styles, { name: 'MuiRadio' })(Radio);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// @inheritedComponent ButtonBase

import React from 'react';

import classNames from 'classnames';
import ButtonBase from '../ButtonBase';
import IconButton from '../IconButton';
import withStyles from '../styles/withStyles';

export const styles = theme => {
  const transition = {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.ease
  };
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: theme.spacing.unit * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: `0 ${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 3}px`,
      position: 'relative',
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      }
    },
    expanded: {
      minHeight: 64
    },
    focused: {
      backgroundColor: theme.palette.grey[300]
    },
    disabled: {
      opacity: 0.38,
      color: theme.palette.action.disabled
    },
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '& > :last-child': {
        paddingRight: theme.spacing.unit * 4
      }
    },
    contentExpanded: {
      margin: '20px 0'
    },
    expandIcon: {
      color: theme.palette.text.icon,
      position: 'absolute',
      top: '50%',
      right: theme.spacing.unit,
      transform: 'translateY(-50%) rotate(0deg)',
      transition: theme.transitions.create('transform', transition)
    },
    expandIconExpanded: {
      transform: 'translateY(-50%) rotate(180deg)'
    }
  };
};

class ExpansionPanelSummary extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      focused: false
    }, this.handleFocus = () => {
      this.setState({
        focused: true
      });
    }, this.handleBlur = () => {
      this.setState({
        focused: false
      });
    }, this.handleChange = event => {
      const { onChange, onClick } = this.props;
      if (onChange) {
        onChange(event);
      }
      if (onClick) {
        onClick(event);
      }
    }, _temp;
  }

  render() {
    const _props = this.props,
          {
      children,
      classes,
      className,
      disabled,
      expanded,
      expandIcon,
      onChange
    } = _props,
          other = _objectWithoutProperties(_props, ['children', 'classes', 'className', 'disabled', 'expanded', 'expandIcon', 'onChange']);
    const { focused } = this.state;

    return React.createElement(
      ButtonBase,
      _extends({
        focusRipple: false,
        disableRipple: true,
        disabled: disabled,
        component: 'div',
        'aria-expanded': expanded,
        className: classNames(classes.root, {
          [classes.disabled]: disabled,
          [classes.expanded]: expanded,
          [classes.focused]: focused
        }, className)
      }, other, {
        onKeyboardFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleChange
      }),
      React.createElement(
        'div',
        { className: classNames(classes.content, { [classes.contentExpanded]: expanded }) },
        children
      ),
      expandIcon && React.createElement(
        IconButton,
        {
          disabled: disabled,
          className: classNames(classes.expandIcon, {
            [classes.expandIconExpanded]: expanded
          }),
          component: 'div',
          tabIndex: '-1',
          'aria-hidden': 'true',
          onClick: this.handleChange
        },
        expandIcon
      )
    );
  }
}

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';
ExpansionPanelSummary.defaultProps = {
  classes: {},
  disabled: false
};
export default withStyles(styles, { name: 'MuiExpansionPanelSummary' })(ExpansionPanelSummary);
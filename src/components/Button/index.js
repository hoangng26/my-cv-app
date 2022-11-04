import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ href, to, children, primary, outline, className, leftIcon, rightIcon, onClick, ...passProps }, ref) {
  let Component = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (href) {
    props.href = href;
    Component = 'a';
  } else if (to) {
    props.to = to;
    Component = Link;
  }

  const classes = cx('container', {
    primary,
    outline,
    [className]: Boolean(className),
    links: Boolean(href) || Boolean(to),
  });

  return (
    <Component ref={ref} className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}

export default forwardRef(Button);

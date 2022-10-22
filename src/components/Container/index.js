import classNames from 'classnames/bind';
import React from 'react';

import styles from './Container.module.scss';

const cx = classNames.bind(styles);

function Container({ children, className, ...props }) {
  return (
    <div className={cx('container', className)} {...props}>
      {children}
    </div>
  );
}

export default Container;

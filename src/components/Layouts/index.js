import classNames from 'classnames/bind';
import React from 'react';
import { Footer } from './components';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('container')}>
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;

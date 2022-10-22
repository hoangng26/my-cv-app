import classNames from 'classnames/bind';
import React from 'react';

import styles from './Overview.module.scss';

const cx = classNames.bind(styles);

function Overview({ className, data, title, icon, ...props }) {
  return (
    <div className={cx('container', className)}>
      <div className={cx('title')}>
        <span className={cx('icon')}>{icon}</span>
        <h2>{title}</h2>
      </div>
      <div className={cx('content')}>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Overview;

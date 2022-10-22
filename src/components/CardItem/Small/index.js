import classNames from 'classnames/bind';
import React from 'react';

import styles from './CardSmall.module.scss';

const cx = classNames.bind(styles);

function CardSmall({ className, data, title, icon, ...props }) {
  return (
    <div className={cx('container', className)} {...props}>
      <div className={cx('title')}>
        <span className={cx('icon')}>{icon}</span>
        <h2>{title}</h2>
      </div>
      <div className={cx('content')}>
        <ul>
          {Object.keys(data).map((key) => (
            <li key={key}>
              <h3>{key}</h3>
              <ul>
                {data[key].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardSmall;

import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './CardLarge.module.scss';

const cx = classNames.bind(styles);

function CardLarge({ className, data, title, icon, ...props }) {
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
              <div className={cx('time')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCalendarDays} />
                <span className={cx('text')}>{key}</span>
              </div>
              <ul className={cx('description')}>
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

export default CardLarge;

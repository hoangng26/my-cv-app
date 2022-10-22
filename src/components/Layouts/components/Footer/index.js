import { faFacebookSquare, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('container')}>
      <p>Find me on Social Media</p>
      <div className={cx('social-links')}>
        <a href="#!" className={cx('link')}>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="#!" className={cx('link')}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#!" className={cx('link')}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#!" className={cx('link')}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#!" className={cx('link')}>
          <FontAwesomeIcon icon={faPinterest} />
        </a>
      </div>
      <p>
        Powered by <span className={cx('author')}>hoangng26</span>
      </p>
    </footer>
  );
}

export default Footer;

import { faFacebookSquare, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import data from '~/assets/data';
import Button from '~/components/Button';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('container')}>
      <p>Find me on Social Media</p>
      <div className={cx('social-links')}>
        <Button href={data.Contact.Facebook} target="_blank" className={cx('link')}>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Button>
        <Button href={data.Contact.Instagram} target="_blank" className={cx('link')}>
          <FontAwesomeIcon icon={faInstagram} />
        </Button>
        <Button href={data.Contact.Twitter} target="_blank" className={cx('link')}>
          <FontAwesomeIcon icon={faTwitter} />
        </Button>
        <Button href={data.Contact.Linkedin} target="_blank" className={cx('link')}>
          <FontAwesomeIcon icon={faLinkedin} />
        </Button>
        <Button href={data.Contact.Pinterest} target="_blank" className={cx('link')}>
          <FontAwesomeIcon icon={faPinterest} />
        </Button>
      </div>
      <p>
        Powered by <span className={cx('author')}>hoangng26</span>
      </p>
    </footer>
  );
}

export default Footer;

import React from 'react';
import classNames from 'classnames/bind';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faBriefcase,
  faCakeCandles,
  faCrosshairs,
  faEnvelope,
  faHome,
  faPhone,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '~/assets/data';
import images from '~/assets/images';
import { CardSmall } from '../CardItem';
import Container from '../Container';
import Image from '../Image';

import styles from './PersonalInfo.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function PersonalInfo({ className, ...props }) {
  return (
    <Container className={cx('container', className)} {...props}>
      <div className={cx('avt-container')}>
        <Image src={images.userAvt} alt="user-avt" className={cx('user-avt')} />
        <div className={cx('username-container')}>
          <h1>{data.PersonalInfo.Name}</h1>
        </div>
      </div>

      <div className={cx('info-container')}>
        <div className={cx('contact-info')}>
          <div className={cx('position', 'contact-item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faBriefcase} />
            <p>{data.PersonalInfo.Position}</p>
          </div>
          <div className={cx('birth', 'contact-item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faCakeCandles} />
            <p>{data.PersonalInfo.Birth}</p>
          </div>
          <div className={cx('address', 'contact-item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faHome} />
            <p>{data.PersonalInfo.Address}</p>
          </div>
          <div className={cx('email', 'contact-item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
            <Button href={`mailto:${data.PersonalInfo.Email}`}>{data.PersonalInfo.Email}</Button>
          </div>
          <div className={cx('phone', 'contact-item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
            <Button href={`tel:${data.PersonalInfo.Phone}`}>{data.PersonalInfo.Phone}</Button>
          </div>
          <div className={cx('linkedin', 'contact-item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faLinkedin} />
            <Button href={data.Contact.Linkedin} target="_blank">
              {data.PersonalInfo.Linkedin}
            </Button>
          </div>
        </div>
        <CardSmall
          className={cx('skills')}
          data={data.Skills}
          title="Skill"
          icon={<FontAwesomeIcon icon={faPuzzlePiece} />}
        />
        <CardSmall
          className={cx('post-graduation-plan')}
          data={data['Post-Graduation Plan']}
          title="Post-graduation plan"
          icon={<FontAwesomeIcon icon={faCrosshairs} />}
        />
      </div>
    </Container>
  );
}

export default PersonalInfo;

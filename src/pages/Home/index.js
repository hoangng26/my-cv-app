import React from 'react';
import className from 'classnames/bind';

import styles from './HomePage.module.scss';
import PersonalInfo from '~/components/PersonalInfo';
import { CardLarge, Overview } from '~/components/CardItem';
import data from '~/assets/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Container from '~/components/Container';

const cx = className.bind(styles);

function HomePage() {
  return (
    <div className={cx('container')}>
      <PersonalInfo className={cx('personal-info')} />

      <Container className={cx('overview')}>
        <Overview data={data.Overview} title="Overview" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
      </Container>

      <Container className={cx('education-info')}>
        <CardLarge data={data.Education} title="Education" icon={<FontAwesomeIcon icon={faGraduationCap} />} />
      </Container>

      <Container className={cx('work-info')}>
        <CardLarge
          data={data['Work Experience']}
          title="Work Experience"
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        />
      </Container>
    </div>
  );
}

export default HomePage;

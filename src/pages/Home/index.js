import className from 'classnames/bind';

import { faBriefcase, faGraduationCap, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '~/assets/data';
import { CardLarge, Overview } from '~/components/CardItem';
import Container from '~/components/Container';
import PersonalInfo from '~/components/PersonalInfo';
import styles from './HomePage.module.scss';

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

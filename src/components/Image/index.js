import React, { useState } from 'react';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image({ src, alt, className, fallback = images.noImage, ...props }) {
  const [customFallback, setCustomFallback] = useState('');

  const handleError = () => {
    setCustomFallback(fallback);
  };

  return (
    <img
      src={customFallback || src}
      alt={alt}
      className={cx('container', className)}
      {...props}
      onError={handleError}
    />
  );
}

export default Image;

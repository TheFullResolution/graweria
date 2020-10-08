import React from 'react';
import cls from 'classnames';
import * as styles from './Video.module.scss';

interface Props {
  videoSrcURL: string;
  videoTitle: string;
  className?: string;
}

export const Video: React.FC<Props> = ({
  videoSrcURL,
  videoTitle,
  className,
}) => {
  return (
    <div className={cls(styles.video, className)}>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        loading="lazy"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

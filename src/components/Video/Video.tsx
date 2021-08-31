import cls from 'clsx';
import Image from 'next/image';
import React from 'react';
import { useBoolean, useEffectOnce } from 'react-use';
import { isBrowser } from 'react-use/lib/misc/util';
import styles from './Video.module.scss';

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
  const [showIframe, toggleShowIframe] = useBoolean(false);

  const setShowIframeTrue = () => {
    if (!showIframe) {
      toggleShowIframe(true);
    }
  };

  useEffectOnce(() => {
    const initIframe = () => {
      setShowIframeTrue();
    };

    let timeOut: NodeJS.Timeout;
    const domLoaded = () => {
      timeOut = setTimeout(setShowIframeTrue, 3500);
    }

    if (isBrowser) {
      document.addEventListener('scroll', initIframe);
      document.addEventListener('mousemove', initIframe);
      document.addEventListener('touchstart', initIframe);
      document.addEventListener('DOMContentLoaded', domLoaded);
    }
    return () => {
      clearTimeout(timeOut);
      document.removeEventListener('scroll', initIframe);
      document.removeEventListener('mousemove', initIframe);
      document.removeEventListener('touchstart', initIframe);
      document.removeEventListener('DOMContentLoaded', domLoaded);
    };
  });
  return (
    <div className={cls(styles.video, className)}>
      {showIframe ? (
        <iframe
          src={videoSrcURL}
          title={videoTitle}
          loading="lazy"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <Image
          src="/images/youtube.png"
          className={styles.image}
          alt={'Screenshot z Youtube'}
          width={490}
          height={290}
        />
      )}
    </div>
  );
};

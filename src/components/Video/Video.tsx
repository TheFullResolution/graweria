import React from 'react'
import * as styles from "./Video.module.scss"

interface Props {
  videoSrcURL: string
  videoTitle: string
}

export const Video: React.FC<Props> = ({ videoSrcURL, videoTitle }) => {
  return (
    <div className={styles.video}>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        loading="lazy"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}

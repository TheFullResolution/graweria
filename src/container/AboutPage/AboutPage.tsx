import React from 'react'
import { Video } from '../../components/Video/Video'

interface Props {
    data: any
}

export const AboutPage: React.FC<Props> = () => {
  return (
    <div>
      <Video
        videoSrcURL="https://www.youtube-nocookie.com/embed/aErESYSH0EQ?modestbranding=1&rel=0"
        videoTitle="Graweria"
      />
    </div>
  )
}

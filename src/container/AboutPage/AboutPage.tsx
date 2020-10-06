import React from 'react';
import { Markdown } from '../../components/Markdown/Markdown';
import { Video } from '../../components/Video/Video';
import { AboutDataQuery } from '../../graphql-types';

interface Props {
  data: AboutDataQuery;
}

export const AboutPage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <section>
        <div>
          <h1>{data.about.title}</h1>
          <Markdown>{data.about.description}</Markdown>
        </div>
        <Video
          videoSrcURL={data.about.videoSrcURL}
          videoTitle={data.about.videoTitle}
        />
      </section>
    </>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface Props {
  onChange: (val: any) => void;
  forID: string;
  value: any;
  classNameWrapper: string;
}

export const ImageTagsField: React.FC<Props> = (props) => {

  console.log(props)
  return <div>ImageTagsField</div>;
};

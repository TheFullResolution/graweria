/* eslint-disable @typescript-eslint/no-explicit-any */
(window as any).CMS_MANUAL_INIT = true;

import cms from 'netlify-cms-app';
import React from 'react';
import { useEffectOnce } from 'react-use';
import { typography } from '../../utils/typography';
import { UuidControl, UuidPreview } from './components/Uuid';
import { cms_config } from './config';

export const Admin: React.FC = () => {
  useEffectOnce(() => {
    cms.init({ config: cms_config });

    cms.registerWidget('uuid', UuidControl, UuidPreview);
    cms.registerPreviewStyle(typography.toString(), { raw: true });
  });

  return null;
};

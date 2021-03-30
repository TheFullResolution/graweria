import React from 'react';
import { useAsync } from 'react-use';
import { cms_config } from '../../cms/config';
import typography from '../../legacy/src/utils/typography';
import { UuidControl, UuidPreview } from '../components/CMS/Uuid';

const AdminPage: React.FC = () => {
  useAsync(async () => {
    const cms = (await import('netlify-cms-app')).default;

    cms.init({ config: cms_config as any });

    cms.registerWidget('uuid', UuidControl, UuidPreview);
    cms.registerPreviewStyle(typography.toString(), { raw: true });
  });

  return <div id="nc-root" className="stencilbook-custom-cms" />;
};

export default AdminPage;

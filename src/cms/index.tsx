import CMS from 'netlify-cms-app';
import { UuidControl, UuidPreview } from 'netlify-cms-widget-uuid-v4';
import React, { useEffect } from 'react';
import { render } from 'react-dom';
import typography from '../utils/typography';
import { BlogPagePreview } from './BlogPagePreview';

const createRoot = () => {
  const $root = document.createElement('div');
  const styleOverrides = document.createElement('style');
  styleOverrides.textContent = `
	.Pane1 [class*='ControlPaneContainer']:not([class*='PreviewPaneContainer']) {
		padding-bottom: 40vh;
	}
	`;
  document.body.appendChild(styleOverrides);
  document.body.appendChild($root);
  return $root;
};

const CMS_APP = () => {
  useEffect(() => {
    CMS.registerWidget('uuid', UuidControl, UuidPreview);
    CMS.registerPreviewTemplate('blog', BlogPagePreview);
    CMS.registerPreviewStyle(typography.toString(), { raw: true });
  }, []);

  return <div id="nc-root" className="stencilbook-custom-cms" />;
};

render(<CMS_APP />, createRoot());

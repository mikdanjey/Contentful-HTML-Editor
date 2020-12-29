import React from 'react';
import { render } from 'react-dom';

import { init, locations } from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import '@contentful/forma-36-fcss/dist/styles.css';
import { MultipleLineEditor } from '@contentful/field-editor-multiple-line';

init(sdk => {
  const root = document.getElementById('root');
  sdk.window.startAutoResizer();
  render(<MultipleLineEditor sdk={sdk} value={"Mikdan Text"} />, root);
});

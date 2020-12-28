import React from 'react';
import { render } from 'react-dom';

import { init, locations } from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import '@contentful/forma-36-fcss/dist/styles.css';
import { RichTextEditor, renderRichTextDialog } from '@contentful/field-editor-rich-text';

init(sdk => {
  const root = document.getElementById('root');
  sdk.window.startAutoResizer();
  if (sdk.location.is(locations.LOCATION_DIALOG)) {
    render(renderRichTextDialog(sdk), root);
  } else {
    render(<RichTextEditor sdk={sdk} value={"Mikdan Text"} />, root);
  }
});

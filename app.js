import React, { Component } from 'react';
import { render } from 'react-dom';

import { init, locations } from 'contentful-ui-extensions-sdk';
import { MultipleLineEditor } from '@contentful/field-editor-multiple-line';
import { Heading, Note, Form, SelectField, Option } from '@contentful/forma-36-react-components';


import '@contentful/forma-36-react-components/dist/styles.css';
import '@contentful/forma-36-fcss/dist/styles.css';

const DEFAULT_ANIMAL = 'cat';

init(sdk => {
  const root = document.getElementById('root');
  if (sdk.location.is(locations.LOCATION_APP_CONFIG)) {
    render(<AppCustomConfig sdk={sdk} />, root);
  } else {
    render(<textarea type="text" isInitiallyDisabled={false} sdk={sdk} value={"Mikdan Text"} />, root);
    sdk.window.startAutoResizer();
  }
});

class AppCustomConfig extends Component {
  constructor(props) {
    super(props);
    this.state = { parameters: {} };
    this.app = this.props.sdk.app;
    this.app.onConfigure(() => this.onConfigure());
  }

  async componentDidMount() {
    const parameters = await this.app.getParameters();
    this.setState(
      { parameters: parameters || {} },
      () => this.app.setReady()
    );
  }

  render() {
    return (
      <Form id="app-config">
        <Heading>Contentful HTML Editor</Heading>
        <Note noteType="primary" title="About the mikdan app">
          it was a sample
        </Note>
        <SelectField
          required
          name="animal-selection"
          id="animal-selection"
          labelText="Animalz"
          value={this.state.parameters.animal || DEFAULT_ANIMAL}
          onChange={e => this.setState({ parameters: { animal: e.target.value } })}
        >
          <Option value={DEFAULT_ANIMAL}>Cat</Option>
          <Option value="dog">Dog</Option>
          <Option value="owl">Owl</Option>
          <Option value="tiger">Tiger</Option>
        </SelectField>
      </Form>
    );
  }

  async onConfigure() {
    const { items: contentTypes } = await this.props.sdk.space.getContentTypes();
    const contentTypeIds = contentTypes.map(ct => ct.sys.id)

    return {
      parameters: this.state.parameters,
      targetState: {
        EditorInterface: contentTypeIds.reduce((acc, id) => {
          return { ...acc, [id]: { sidebar: { position: 0 } } }
        }, {})
      }
    };
  }
}

function AnimalPicture({ sdk }) {
  const animal = sdk.parameters.installation.animal || DEFAULT_ANIMAL;
  const src = `https://source.unsplash.com/250x250/?${animal}`;

  return <img alt={animal} id="animal-picture" src={src} />;
}
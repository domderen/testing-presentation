import React from 'react/addons';
import { jsdom } from 'jsdom';
import chai from 'chai';

import HelloReact from './../../src/HelloReact';

const { TestUtils } = React.addons;
const expect = chai.expect;

describe('HelloReact', () => {
  before(() => {
    global.document = jsdom('<!doctype html><html><body></body></html>');
    global.window = global.document.defaultView;
    global.navigator = global.window.navigator;
    require('react/lib/ExecutionEnvironment').canUseDOM = true;
  });

  after(() => {
    delete global.document;
    delete global.window;
    delete global.navigator;
  });

  it('should return Hello React text inside a div', () => {
    const helloReactComponent = TestUtils.renderIntoDocument(
      <HelloReact />
    );

    const div = TestUtils.findRenderedDOMComponentWithTag(helloReactComponent, 'div');

    expect(div.getDOMNode().textContent).to.equal('Hello React!');
  });
});

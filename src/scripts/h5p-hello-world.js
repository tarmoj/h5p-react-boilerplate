import React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './components/Main';

export default class HelloReact {
  /**
   * @constructor
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(params, contentId, extras = {}) {
    // console.log('params: ', params);

    // Create render root
    this.root = document.createElement('div');
    this.name =  params.textField || 'Adalbert Bartolkoff-Simeon';
    this.contentId = contentId;
    this.extras = extras;
  }

  /**
   * Attach library to wrapper.
   * @param {jQuery} $wrapper Content's container.
   */
  attach($wrapper) {
    $wrapper.addClass('h5p-hello-react');
    $wrapper.append(this.root);

    /*
     * We render an initial state of the content type here. It will be updated
     * later when the data from the server has arrived.
     * this.root is the container for React content
     */
    ReactDOM.render(
      <div className={'h5p-hello-react-wrapper'}>
        <h1 className={'h5p-hello-react-title'}>React test</h1>
        <div className={'h5p-hello-react-introduction'}>
          Hello. My name is {this.name}
        </div>
        <Main question={'How many?'}/>
      </div>,
      this.root
    );
  }
}

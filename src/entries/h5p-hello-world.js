import HelloReact from '../scripts/h5p-hello-world';
import '../styles/h5p-hello-world.scss';

// Load library
H5P = H5P || {};
H5P.HelloReact = HelloReact;

H5P.HelloReact = class extends H5P.ContentType(true) {
  constructor(params, contentId, extras) {
    super();
    this.helloReact = new HelloReact(params, contentId, extras);
  }

  /**
   * Attach library to DOM.
   * @param {jQuery} $wrapper Content's container.
   */
  attach($wrapper) {
    this.helloReact.attach($wrapper);
  }
};

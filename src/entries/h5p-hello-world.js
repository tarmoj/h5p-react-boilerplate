import "../styles/h5p-hello-world.css";
import HelloReact from "../scripts/h5p-hello-world";

// Load library
H5P = H5P || {};
H5P.HelloReact = HelloReact;

H5P.HelloReacy = class extends H5P.ContentType(true) {
    constructor(params, contentId, extras) {
        super();
        this.helloReact = new HelloReact(params, contentId, extras);


        /**
         * Attach library to DOM.
         * @param wrapper Content's container.
         */
        this.attach = ($wrapper) => { // enne oli väljas constructorist, tõstsin siia. Pole kindel, kas nii toimib?
            this.helloReact.attach($wrapper);
        };

    }

};

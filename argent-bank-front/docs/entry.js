
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/components/public/Error/Error.js';
reactComponents['Error'] = Component0;

import Component1 from '../src/components/public/Container/Container.js';
reactComponents['Container'] = Component1;

import Component2 from '../src/components/public/Nav/Nav.js';
reactComponents['Nav'] = Component2;

import Component3 from '../src/pages/privat/Profile/Profile.js';
reactComponents['Profile'] = Component3;

import Component4 from '../src/pages/Auth/SignIn.js';
reactComponents['SignIn'] = Component4;

import Component5 from '../src/pages/privat/User/UserEdit.js';
reactComponents['UserEdit'] = Component5;
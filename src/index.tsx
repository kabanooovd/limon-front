import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MainContainer } from './containers';

ReactDom.render(<BrowserRouter>
  <MainContainer />
</BrowserRouter>, document.getElementById("root"));
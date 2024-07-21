import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App'

import GlobalStyle from './styles/global'

ReactDom.render(
  <>
    <GlobalStyle />
    <App/>
  </>,
  document.getElementById('root')
)
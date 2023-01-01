import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
	<React.StrictMode>
    <ThemeProvider theme={theme}>
			<GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

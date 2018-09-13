import React from 'react';
import { ReactDOM, render } from 'react-dom';
import createStore from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
//import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';


//const store = createStore(reducer)

render (
	<Provider>
	  <App/>
	</Provider>,
	document.getElementById('root')
	)


registerServiceWorker();

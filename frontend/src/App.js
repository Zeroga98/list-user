import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import initStore from './store';

// Router
import Route from './router'
// History for router
const history = createBrowserHistory();
//initial store
const store = initStore(history);

class App extends Component {
	render() {
		return (
			<Provider store={store} >
				<ConnectedRouter history={history}>
					<Route />
				</ConnectedRouter>
			</Provider>
		)
	}
}

export default App
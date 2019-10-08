import React from 'react';
import './App.css';

class App extends React.Component {
	render() {
		const name = 'John Doe';
		const loading = false;
		const showName = false;

		return (
			<div className='App'>
				{loading ? <h4>loading...</h4> : <h1>Hello {showName && name}</h1>}
			</div>
		);
	}
}

export default App;

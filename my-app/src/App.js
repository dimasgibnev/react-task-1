import logo from './logo.svg'; // Декларативный
import './App.css';
import { getDate } from './utils';

export const App = () => { // императивный
	return (
		<div className="App">
			<header className="App-header"> {/*Дальше декларативный*/}
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{getDate()} год</p>
			</header>
		</div> 
	);
};

import { useState, useEffect } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
	const [data, setData] = useState([]);
	// Do this
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch('https://jsonplaceholder.typicode.com/todos');
			const jsonData = await data.json();
			console.log(jsonData);
			setData(jsonData);
		};

		fetchData();
	}, []);
	// Dont do this
	// useEffect(async () => {
	// 	const data = await fetch('https://jsonplaceholder.typicode.com/todos');
	// 	const jsonData = await data.json();
	// 	console.log(jsonData);
	// });

	return (
		<>
			<div className="App">
				<Counter />
			</div>
		</>
	);
}

export default App;

import { useState, useEffect } from 'react';
import './App.css';

function Card() {
	useEffect(() => {
		console.log('I was mounted');
		return () => {
			console.log('I was unmounted');
		};
	}, []);
	return (
		<>
			<div>Card</div>
		</>
	);
}

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(`The value of count is ${count}`);
	}, [count]);

	return (
		<>
			<div className="App">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			</div>
			{count < 5 && <Card />}
		</>
	);
}

export default App;

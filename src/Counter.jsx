import { useState, useEffect } from 'react';

function Counter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let intervalId;

		if (count < 10) {
			intervalId = setInterval(() => {
				setCount((prevCount) => prevCount + 1);
			}, 1000);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [count]);

	return (
		<div>
			<h1>Counter</h1>
			<p>{count}</p>
		</div>
	);
}

export default Counter;

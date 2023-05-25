import { useReducer } from 'react';

type CounterType = {
	count: number;
};

type ActionType = {
	type: string;
	payload: number;
};

type ResetType = {
	type: 'reset';
};

type CounterAction = ActionType | ResetType;

const initialValue = { count: 0 };
const reducer = (state: CounterType, action: CounterAction) => {
	switch (action.type) {
		case 'increase':
			return { count: state.count + action.payload };
		case 'decrease':
			return { count: state.count - action.payload };
		case 'reset':
			return initialValue;
		default:
			return state;
	}
};

const ReducerExample = () => {
	const [state, dispatch] = useReducer(reducer, initialValue);

	return (
		<div>
			<div>Sayı: {state.count}</div>
			<button onClick={() => dispatch({ type: 'increase', payload: 10 })}>10 artır</button>
			<button onClick={() => dispatch({ type: 'decrease', payload: 10 })}>10 azalt</button>
			<button onClick={() => dispatch({ type: 'reset' })}>reset</button>
		</div>
	);
};

export default ReducerExample;

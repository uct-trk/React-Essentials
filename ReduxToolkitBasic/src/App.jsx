import { useEffect } from 'react';
import CourseList from './components/CourseList';
import Navbar from './components/Navbar';
import { calculateTotalPrice } from './slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotalPrice());
	}, [cartItems]);
	return (
		<>
			<Navbar />
			<CourseList />
		</>
	);
}

export default App;

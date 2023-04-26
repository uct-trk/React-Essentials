import { useState } from 'react';
import Auth from './components/Auth';
import authContext from './context/auth-context';

function App() {
	const [authStatus, setAuthStatus] = useState(false);

	const loginAuth = () => {
		setAuthStatus(!authStatus);
	};
	return (
		<>
			<authContext.Provider value={{ status: authStatus, login: loginAuth }}>
				<Auth />
			</authContext.Provider>
		</>
	);
}

export default App;

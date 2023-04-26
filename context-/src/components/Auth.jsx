import { useContext } from 'react';
import authContext from '../context/auth-context';

const Auth = () => {
	const { status, login } = useContext(authContext);

	return (
		<div>
			<h1>Giriş Yaptın mı ?</h1>
			{status ? <p>Giriş Yaptım</p> : <p>Hayır</p>}
			<button onClick={login}>Status</button>
		</div>
	);
};

export default Auth;

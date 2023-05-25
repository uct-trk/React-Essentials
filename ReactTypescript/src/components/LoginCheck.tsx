import { useState } from 'react';

type UserType = {
	name: string;
	email: string;
	phone: string;
};

const LoginCheck = () => {
	const [user, setUser] = useState<UserType | null>({} as UserType);

	const handleLogin = () => {
		setUser({ name: 'Ugurcan', email: 'ugurasd@test.com', phone: '123456789' });
	};
	const handleLogOut = () => {
		setUser({} as UserType);
	};
	return (
		<div>
			<button onClick={handleLogin}>Giriş Yap</button>
			<button onClick={handleLogOut}>Çıkış Yap</button>
			<div>
				<p>{user?.name}</p>
				<p>{user?.email}</p>
				<p>{user?.phone}</p>
			</div>
		</div>
	);
};

export default LoginCheck;

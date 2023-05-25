import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { useState } from 'react';

const ContextExample = () => {
	const theme = useContext(ThemeContext);
	console.log(theme);
	const [isDark, setIsDark] = useState<boolean>(false);

	const handleWhite = () => {
		setIsDark(false);
	};

	const handleDark = () => {
		setIsDark(true);
	};
	return (
		<div style={{ backgroundColor: isDark ? theme.secondary.main : theme.primary.main, color: isDark ? theme.secondary.text : theme.primary.text }}>
			<button onClick={handleDark}>DARK</button>
			<button onClick={handleWhite}>LIGTH</button>
			<div>Arka plan rengi</div>
		</div>
	);
};

export default ContextExample;

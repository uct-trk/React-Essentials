type dataComing = {
	name: string;
	courseNumber: number;
	isBest: boolean;
};

const Home = ({ name, courseNumber, isBest }: dataComing) => {
	return (
		<div>
			{name} eğitimine hoş geldiniz. Kurs sayısı : {courseNumber} <br />
			En iyi React eğitimi bu eğitim mi ? {isBest ? 'Evet :))' : 'Hayır :)'}
		</div>
	);
};

export default Home;

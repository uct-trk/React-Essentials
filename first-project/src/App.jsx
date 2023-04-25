import 'bulma/css/bulma.css';
import Course from './components/Course';
import data from './data.json';

function App() {
	return (
		<>
			<section className="hero is-link">
				<div className="hero-body">
					<p className="title">Kurslarım</p>
				</div>
			</section>
			<div className="container">
				<section className="section">
					<div className="columns">
						{data?.map((item, index) => (
							<div key={index} className="column">
								<Course img={item.img} title={item.title} description={item.description} />
							</div>
						))}
					</div>
				</section>
			</div>
		</>
	);
}

export default App;

import PropTypes from 'prop-types';

const Course = ({ title, description, img }) => {
	return (
		<>
			<div className="card">
				<div className="card-image">
					<figure className="image is-4by3">
						<img src={img} alt="Placeholder image" />
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-content">
							<p className="title is-4">{title}</p>
						</div>
					</div>

					<div className="content">
						{description} <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a>
					</div>
				</div>
			</div>
		</>
	);
};

Course.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};

export default Course;

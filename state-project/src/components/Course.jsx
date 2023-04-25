import PropTypes from 'prop-types';

const data = [
	{
		title: 'React',
		img: 'data:image/png;base64,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',
	},
	{
		title: 'Angular',
		img: 'data:image/png;base64,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',
	},
	{
		title: 'Vue',
		img: 'data:image/jpeg;base64,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',
	},
	{
		title: 'Svelte',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgzj045_TX9ASziAbC5tWdzGd7SA_kIFhPQ&usqp=CAU',
	},
];

const Course = ({ courseTitle }) => {
	return (
		<div>
			{data.map(
				(image, index) =>
					image.title === courseTitle && (
						<div key={index}>
							<img src={image.img} />
						</div>
					),
			)}
		</div>
	);
};

Course.propTypes = {
	courseTitle: PropTypes.string.isRequired,
};

export default Course;

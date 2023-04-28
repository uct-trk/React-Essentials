const Course = ({ title, price, id, description, img, handleDelete }) => {
	return (
		<div className="card">
			<div className="desc-wrapper">
				<img src={img} alt="" />
				<p>{description}</p>
			</div>
			<div className="cardTitlePrice">
				<div>
					<h2 className="cardTitle">{title}</h2>
					<h2 className="cardPrice">{price} TL</h2>
				</div>
				<button onClick={() => handleDelete(id)}>Sil</button>
			</div>
		</div>
	);
};

export default Course;

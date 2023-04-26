const ImageItem = ({ image }) => {
	return (
		<div>
			<img src={image?.urls?.small} alt={image.alt_description ?? image.description} />
		</div>
	);
};

export default ImageItem;

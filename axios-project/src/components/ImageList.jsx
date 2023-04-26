import ImageItem from './ImageItem';
// eslint-disable-next-line react/prop-types
const ImageList = ({ images }) => {
	return (
		<div className="display">
			{images?.data?.results?.map((item) => (
				<div key={item.id}>
					<ImageItem image={item} />
				</div>
			))}
		</div>
	);
};

export default ImageList;

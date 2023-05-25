import { Typography } from '@mui/material';
const TypographyLesson = () => {
	return (
		<div>
			<Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, obcaecati. Itaque magnam voluptate iste laborum iusto tenetur, dolorum veniam quam at consequatur autem architecto eum, harum praesentium delectus voluptatibus cupiditate!</Typography>
			<Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, obcaecati. Itaque magnam voluptate iste laborum iusto tenetur, dolorum veniam quam at consequatur autem architecto eum, harum praesentium delectus voluptatibus cupiditate!</Typography>
			<Typography variant="h1">H1 Gorunum</Typography>
			<Typography variant="h2">H2 Gorunum</Typography>
			<Typography variant="h3">H3 Gorunum</Typography>
			<Typography variant="h4">H4 Gorunum</Typography>
			<Typography variant="h5">H5 Gorunum</Typography>
			<Typography variant="h6">H6 Gorunum</Typography>

			<Typography variant="h1" component="h5">
				H1 Gorunum css özellikleri H5 özellikleri
			</Typography>

			<Typography variant="h5" align="left">
				H5 Gorunum Sola yasla
			</Typography>

			<Typography variant="h6" component="h5" align="center">
				H6 Gorunum Ortada tut
			</Typography>

			<Typography variant="h6" component="h5" align="right">
				H6 Gorunum Sağa yasla
			</Typography>

			<Typography variant="subtitle1">Alt başlık 1</Typography>

			<Typography variant="subtitle2">Alt başlık 2</Typography>
		</div>
	);
};

export default TypographyLesson;

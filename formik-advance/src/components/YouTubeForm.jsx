import { useFormik } from 'formik';

const YouTubeForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			channel: '',
		},
		onSubmit: (values) => {
			console.group(values, 'form data');
		},
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label>Name</label>
					<input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
				</div>
				<div>
					<label>E-mail</label>
					<input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
				</div>
				<div>
					<label>Channel</label>
					<input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default YouTubeForm;

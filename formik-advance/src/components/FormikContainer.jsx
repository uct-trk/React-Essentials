import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
	const initialValues = {
		email: '',
	};
	const validationSchema = Yup.object({
		email: Yup.string().required('Zorunlu'),
	});
	const onSubmit = (values) => {
		console.log(values, 'Form data');
	};
	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{(formik) => (
				<Form>
					<FormikControl control="input" type="email" label="email" name="email" />
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikContainer;

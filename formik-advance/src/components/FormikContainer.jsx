import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
	const initialValues = {
		email: '',
		textarea: '',
	};
	const validationSchema = Yup.object({
		email: Yup.string().required('Zorunlu'),
		textarea: Yup.string().required('Zorunlu').min(5, 'En 5 karakterli olmalı'),
	});
	const onSubmit = (values) => {
		console.log(values, 'Form data');
	};
	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{(formik) => (
				<Form>
					<FormikControl control="input" type="email" label="Email" name="email" />
					<FormikControl control="textarea" type="textarea" label="Description" name="textarea" />
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikContainer;

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
	const dropdownOptions = [
		{ key: 'Seçiniz', value: '' },
		{ key: 'Option 1', value: '1' },
		{ key: 'Option 2', value: '2' },
		{ key: 'Option 3', value: '3' },
	];

	const radioArray = [
		{ key: 'Radio 1', value: '1' },
		{ key: 'Radio 2', value: '2' },
		{ key: 'Radio 3', value: '3' },
	];

	const initialValues = {
		email: '',
		textarea: '',
		selectOption: '',
		selectRadio: '',
	};

	const validationSchema = Yup.object({
		email: Yup.string().required('Zorunlu'),
		textarea: Yup.string().required('Zorunlu').min(5, 'En az 5 karakterli olmalı'),
		selectOption: Yup.string().required('Zorunlu'),
		selectRadio: Yup.string().required('Zorunlu'),
	});

	const onSubmit = (values, onSubmitProps) => {
		console.log(values, 'Form data');
		setTimeout(() => {
			onSubmitProps.setSubmitting(false);
			onSubmitProps.resetForm();
		}, 3000);
	};
	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{(formik) => (
				<Form>
					<FormikControl control="input" type="email" label="Email" name="email" />
					<FormikControl control="textarea" type="textarea" label="Description" name="textarea" />
					<FormikControl control="select" type="select" label="Select a Topic" name="selectOption" options={dropdownOptions} />
					<FormikControl control="radio" type="radio" label="Select a Radio" name="selectRadio" options={radioArray} />
					<button disabled={!formik.isValid || formik.isSubmitting} type="submit">
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikContainer;

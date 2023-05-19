import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const RegisterForm = () => {
	const options = [
		{ key: 'Email', value: 'emailmoc' },
		{ key: 'Telephone', value: 'telephonemoc' },
	];
	const initialValues = {
		email: '',
		password: '',
		confirmPassword: '',
		modeOfContact: '',
		phone: '',
	};

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').required('Required'),
		password: Yup.string().required('Required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), ''], 'Passwords must match')
			.required('Required'),
		modeOfContact: Yup.string().required('Required'),
		phone: Yup.string().when('modeOfContact', {
			is: 'telephonemoc',
			then: Yup.string().required('Required'),
		}),
	});

	const onSubmit = (values, onSubmitProps) => {
		console.log(onSubmitProps);
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
					<FormikControl control="input" type="password" label="Şifre" name="password" />
					<FormikControl control="input" type="password" label="Şifre Tekrarı" name="confirmPassword" />
					<FormikControl control="radio" type="radio" label="Select a Radio" name="modeOfContact" options={options} />
					<FormikControl control="input" type="text" label="Telefon" name="phone" />
					<button disabled={!formik.isValid || formik.isSubmitting} type="submit">
						Submit
					</button>
					{console.log(formik)}
				</Form>
			)}
		</Formik>
	);
};

export default RegisterForm;

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const EnrollmentForm = () => {
	const dropdownOptions = [
		{ key: 'Select your course', value: '' },
		{ key: 'React', value: 'react' },
		{ key: 'Angular', value: 'angular' },
		{ key: 'Vue', value: 'vue' },
	];

	const checkboxOptions = [
		{ key: 'HTML', value: 'html' },
		{ key: 'CSS', value: 'css' },
		{ key: 'JavaScript', value: 'javascript' },
	];

	const initialValues = {
		email: '',
		bio: '',
		course: '',
		skills: [],
		courseDate: null,
	};

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email format').required('Required'),
		bio: Yup.string().required('Required'),
		course: Yup.string().required('Required'),
		courseDate: Yup.date().required('Required').nullable(),
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
			{(formik) => {
				return (
					<Form>
						<FormikControl control="input" type="email" label="Email" name="email" />
						<FormikControl control="textarea" type="textarea" label="Bio" name="bio" />
						<FormikControl control="select" label="Course" name="course" options={dropdownOptions} />
						<FormikControl control="checkbox" label="Your skillset" name="skills" options={checkboxOptions} />
						<FormikControl control="datepicker" label="Course date" name="courseDate" />
						<button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
							Submit
						</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default EnrollmentForm;

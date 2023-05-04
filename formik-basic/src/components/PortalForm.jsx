import { Field, Form, Formik } from 'formik';
import { advancedSchema } from '../schemas';
import CustomInput from './CustomInput';

const MyInput = ({ field, form, ...props }) => {
	return <input {...field} {...props} />;
};
const PortalForm = () => {
	const onSubmit = async (values, actions) => {
		console.log(values, 'val', actions);
		await new Promise((resolve) => {
			setTimeout(resolve, 1000);
		});
	};
	return (
		<div>
			<Formik initialValues={{ username: '', university: 'red', isAccepted: false }} onSubmit={onSubmit} validationSchema={advancedSchema}>
				{() => (
					<Form>
						<CustomInput label="Kullanıcı Adı" name="username" type="text" placeholder="Kullanıcı adını giriniz" />
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default PortalForm;

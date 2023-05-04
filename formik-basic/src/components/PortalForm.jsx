import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { advancedSchema } from '../schemas';
import CustomCheckbox from './CustomCheckbox';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

const PortalForm = () => {
	const onSubmit = async (values, actions) => {
		console.log(values, 'val', actions);
		await new Promise((resolve) => {
			setTimeout(resolve, 1000);
		});
		actions.resetForm();
	};
	return (
		<div>
			<Formik initialValues={{ username: '', university: '', isAccepted: false }} onSubmit={onSubmit} validationSchema={advancedSchema}>
				{({ isSubmitting }) => (
					<Form>
						<CustomInput label="Kullanıcı Adı" name="username" type="text" placeholder="Kullanıcı adını giriniz" />
						<CustomSelect label="Üniversite" name="university" placeholder="Kullanıcı adını giriniz" />
						<CustomCheckbox label="Kullanım Koşulları" name="isAccepted" type="checkbox" />
						<button disabled={isSubmitting} type="submit">
							KAYDET
						</button>
						<Link style={{ color: 'white' }} to={'/'}>
							Ana forma git
						</Link>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default PortalForm;

import { useFormik } from 'formik';
import { basicSchema } from '../schemas/index';

const GeneralForm = () => {
	const onSubmit = async (values, actions) => {
		console.log(values, 'val', actions);
		await new Promise((resolve) => {
			setTimeout(resolve, 1000);
		});
		resetForm();
	};

	const { values, errors, handleChange, handleSubmit, isSubmitting, resetForm } = useFormik({
		initialValues: {
			email: '',
			age: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: basicSchema,
		onSubmit,
	});

	console.log(errors, isSubmitting);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Email</label>
				<input value={values.email} onChange={handleChange} id="email" name="email" placeholder="Mail adresiniz" type="email" className={errors.email ? 'input-error' : ''} />
				{errors.email && <p className="error">{errors.email}</p>}
			</div>
			<div>
				<label>Yaşınız</label>
				<input value={values.age} onChange={handleChange} id="age" name="age" type="number" placeholder="Yaşınızı giriniz" className={errors.age ? 'input-error' : ''} />
				{errors.age && <p className="error">{errors.age}</p>}
			</div>
			<div>
				<label>Şifre</label>
				<input value={values.password} onChange={handleChange} id="password" name="password" type="password" placeholder="Şifrenizi giriniz" className={errors.password ? 'input-error' : ''} />
				{errors.password && <p className="error">{errors.password}</p>}
			</div>
			<div>
				<label>Şifre Tekrarı</label>
				<input value={values.confirmPassword} onChange={handleChange} id="confirmPassword" name="confirmPassword" type="password" placeholder="Şifrenizi tekrar giriniz" className={errors.confirmPassword ? 'input-error' : ''} />
				{errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
			</div>
			<button disabled={isSubmitting} type="submit">
				KAYDET
			</button>
		</form>
	);
};

export default GeneralForm;

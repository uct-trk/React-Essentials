import { useFormik } from 'formik';

const GeneralForm = () => {
	const { values, errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: '',
			age: '',
			password: '',
			confirmPassword: '',
		},
	});

	console.log(values);

	return (
		<form>
			<div>
				<label>Email</label>
				<input value={values.email} onChange={handleChange} id="email" name="email" placeholder="Mail adresiniz" type="email" />
			</div>
			<div>
				<label>Yaşınız</label>
				<input value={values.age} onChange={handleChange} id="age" name="age" type="number" placeholder="Yaşınızı giriniz" />
			</div>
			<div>
				<label>Şifre</label>
				<input value={values.password} onChange={handleChange} id="password" name="password" type="password" placeholder="Şifrenizi giriniz" />
			</div>
			<div>
				<label>Şifre Tekrarı</label>
				<input value={values.confirmPassword} onChange={handleChange} id="confirmPassword" name="confirmPassword" type="password" placeholder="Şifrenizi tekrar giriniz" />
			</div>
			<button onClick={handleSubmit}>KAYDET</button>
		</form>
	);
};

export default GeneralForm;

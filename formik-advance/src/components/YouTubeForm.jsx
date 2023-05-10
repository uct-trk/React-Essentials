import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
	name: '',
	email: '',
	channel: '',
};

const onSubmit = (values) => {
	console.group(values, 'form data');
};

// yup validasyon şeması. Validsyon işlemlerini yönetiyoruz
const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email format').required('Required'),
	channel: Yup.string().required('Required'),
});

const YouTubeForm = () => {
	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			<Form>
				<div className="form-control">
					<label>Name</label>
					<Field type="text" id="name" name="name" />
					<ErrorMessage className="error" name="name" />
				</div>
				<div className="form-control">
					<label>E-mail</label>
					<Field type="email" id="email" name="email" />
					<ErrorMessage name="email" />
				</div>
				<div className="form-control">
					<label>Channel</label>
					<Field type="text" id="channel" name="channel" />
					<ErrorMessage name="channel" />
				</div>
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};

export default YouTubeForm;

// Formik'in handleBlur fonksiyonu, form elemanlarından biri, örneğin bir input alanı, odaklanmayı kaybettiğinde (blur event) çağrılan bir fonksiyondur. formik.touched ile kontrol edilir

// getFieldProps Formik kütüphanesi tarafından sağlanan bir yardımcı fonksiyondur ve form elemanları için gerekli olan özellikleri içeren bir obje döndürür. Bu özellikler, form elemanının değerini, onChange ve onBlur olaylarını, validasyonu ve daha fazlasını içerebilir.

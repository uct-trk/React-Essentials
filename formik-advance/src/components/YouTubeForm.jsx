import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
	name: '',
	email: '',
	channel: '',
	comments: '',
	address: '',
	social: {
		facebook: '',
		twitter: '',
	},
	phoneNumbers: ['', ''],
	phNumbers: [''],
};

const onSubmit = (values) => {
	console.group(values, 'form data');
};

// yup validasyon şeması. Validsyon işlemlerini yönetiyoruz
const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email format').required('Required'),
	channel: Yup.string().required('Required'),
	address: Yup.string().required('Required'),
});

const YouTubeForm = () => {
	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={false} validateOnBlur={true}>
			<Form>
				<div className="form-control">
					<label>Name</label>
					<Field type="text" id="name" name="name" />
					<ErrorMessage component={TextError} className="error" name="name" />
				</div>
				<div className="form-control">
					<label>E-mail</label>
					<Field type="email" id="email" name="email" />
					<ErrorMessage name="email">{(errorMsg) => <div className="error">{errorMsg}</div>}</ErrorMessage>
				</div>
				<div className="form-control">
					<label>Channel</label>
					<Field type="text" id="channel" name="channel" placeholder="Channel name" />
					<ErrorMessage component={TextError} name="channel" />
				</div>
				<div className="form-control">
					<label>Comments</label>
					<Field as="textarea" type="text" id="comments" name="comments" />
					<ErrorMessage component={TextError} name="comments" />
				</div>
				<div className="form-control">
					<label>Address</label>
					<FastField id="address" name="address">
						{(props) => {
							console.log('sadece bu alan etkileşime girdiğinde render olacak, fastfieldin performans açısından en büyük avantajı');
							const { field, form, meta } = props;
							return (
								<div>
									<input type="text" id="address" {...field} />
									{meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
								</div>
							);
						}}
					</FastField>
				</div>
				<div className="form-control">
					<label>Facebook profile</label>
					<Field type="text" id="facebook" name="social.facebook" />
				</div>
				<div className="form-control">
					<label>Twitter profile</label>
					<Field type="text" id="twitter" name="social.twitter" />
				</div>
				<div className="form-control">
					<label>Primary phone</label>
					<Field type="text" id="primaryPhone" name="phoneNumbers[0]" />
				</div>
				<div className="form-control">
					<label>Secondary phone</label>
					<Field type="text" id="secondaryPhone" name="phoneNumbers[1]" />
				</div>

				<div className="form-control">
					<label>List of phone numbers</label>
					<FieldArray name="phNumbers">
						{(fieldArrayProps) => {
							console.log(fieldArrayProps);
							const { push, remove, form } = fieldArrayProps;
							const { values } = form;
							const { phNumbers } = values;
							console.log(fieldArrayProps, form.errors);
							return (
								<div>
									{phNumbers?.map((phNumber, index) => (
										<div key={index}>
											<div className="form-control">
												<label htmlFor="">{index + 1}</label>
												<Field type="text" name={`phNumbers[${index}]`} />
												{phNumbers.length > 1 && (
													<button type="button" onClick={() => remove(index)}>
														-
													</button>
												)}
												<button type="button" onClick={() => push('')}>
													+
												</button>
											</div>
										</div>
									))}
								</div>
							);
						}}
					</FieldArray>
				</div>
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};

export default YouTubeForm;

// Formik'in handleBlur fonksiyonu, form elemanlarından biri, örneğin bir input alanı, odaklanmayı kaybettiğinde (blur event) çağrılan bir fonksiyondur. formik.touched ile kontrol edilir

// getFieldProps Formik kütüphanesi tarafından sağlanan bir yardımcı fonksiyondur ve form elemanları için gerekli olan özellikleri içeren bir obje döndürür. Bu özellikler, form elemanının değerini, onChange ve onBlur olaylarını, validasyonu ve daha fazlasını içerebilir.

// FieldArray Formik kütüphanesi tarafından sağlanan bir bileşendir ve dinamik form elemanları için kullanılır. FieldArray, formda birden fazla aynı tip form elemanı bulunan durumlarda kullanışlıdır. Örneğin, birden fazla telefon numarası girmek için bir form oluşturmak istediğinizi düşünün. Bu durumda, FieldArray bileşeni kullanarak form elemanlarını dinamik olarak ekleyebilirsiniz.

// FastField, Formik kütüphanesi tarafından sağlanan bir bileşendir ve Field bileşenine benzer şekilde çalışır. Ancak, FastField bileşeni, Field bileşenine göre daha performanslıdır. FastField, shouldComponentUpdate özelliği kullanılarak, değişen alanların sadece yenilenmesi gereken bileşenlerin yenilenmesini sağlar.

// validateOnChange özelliği, Formik kütüphanesi tarafından sağlanan bir özelliktir ve doğrulama işlemi sırasında değişikliklerin anlık olarak doğrulanmasına olanak tanır. Bu özellik, bir form alanı değiştirildiğinde, ilgili alanın doğrulanmasını tetikler.Örneğin, aşağıdaki örnekte, validateOnChange özelliği kullanılarak, form alanları değiştirildiğinde, ilgili alanların doğrulanmasını tetikleyen bir doğrulama işlemi oluşturulur:

// validateOnBlur özelliği, Formik kütüphanesi tarafından sağlanan bir özelliktir ve doğrulama işleminin, form alanlarından biri odak kaybettiğinde tetiklenmesine olanak tanır.Örneğin, yukarıdaki örnekte, validateOnBlur özelliği kullanılarak, form alanlarından biri odak kaybettiğinde, ilgili alanın doğrulanmasını tetikleyen bir doğrulama işlemi oluşturulur: false durumunda inputtan focus out olduğumuzda validasyonlar devreye girmez

// Formik'in handleBlur fonksiyonu, form elemanlarından biri, örneğin bir input alanı, odaklanmayı kaybettiğinde (blur event) çağrılan bir fonksiyondur. formik.touched ile kontrol edilir

// getFieldProps Formik kütüphanesi tarafından sağlanan bir yardımcı fonksiyondur ve form elemanları için gerekli olan özellikleri içeren bir obje döndürür. Bu özellikler, form elemanının değerini, onChange ve onBlur olaylarını, validasyonu ve daha fazlasını içerebilir.

// FieldArray Formik kütüphanesi tarafından sağlanan bir bileşendir ve dinamik form elemanları için kullanılır. FieldArray, formda birden fazla aynı tip form elemanı bulunan durumlarda kullanışlıdır. Örneğin, birden fazla telefon numarası girmek için bir form oluşturmak istediğinizi düşünün. Bu durumda, FieldArray bileşeni kullanarak form elemanlarını dinamik olarak ekleyebilirsiniz.

// FastField, Formik kütüphanesi tarafından sağlanan bir bileşendir ve Field bileşenine benzer şekilde çalışır. Ancak, FastField bileşeni, Field bileşenine göre daha performanslıdır. FastField, shouldComponentUpdate özelliği kullanılarak, değişen alanların sadece yenilenmesi gereken bileşenlerin yenilenmesini sağlar.

// validateOnChange özelliği, Formik kütüphanesi tarafından sağlanan bir özelliktir ve doğrulama işlemi sırasında değişikliklerin anlık olarak doğrulanmasına olanak tanır. Bu özellik, bir form alanı değiştirildiğinde, ilgili alanın doğrulanmasını tetikler.Örneğin, aşağıdaki örnekte, validateOnChange özelliği kullanılarak, form alanları değiştirildiğinde, ilgili alanların doğrulanmasını tetikleyen bir doğrulama işlemi oluşturulur:

// validateOnBlur özelliği, Formik kütüphanesi tarafından sağlanan bir özelliktir ve doğrulama işleminin, form alanlarından biri odak kaybettiğinde tetiklenmesine olanak tanır.Örneğin, yukarıdaki örnekte, validateOnBlur özelliği kullanılarak, form alanlarından biri odak kaybettiğinde, ilgili alanın doğrulanmasını tetikleyen bir doğrulama işlemi oluşturulur: false durumunda inputtan focus out olduğumuzda validasyonlar devreye girmez

// validateField, sadece belirli bir form alanının doğrulanmasını sağlar. Bu yöntem, belirli bir form alanında gerçek zamanlı doğrulama işlemleri yapmak için kullanışlıdır

// validateForm yöntemi, tüm form alanlarının doğrulanmasını sağlar. Bu yöntem, formun gönderilmeden önce tüm alanların doğru bir şekilde doldurulduğundan emin olmak için kullanılabilir

// setFieldTouched, belirtilen form alanının dokunulduğunu işaretler. Bu, bir form alanının dokunulup dokunulmadığını veya odaklanıp odaklanmadığını takip etmek için kullanışlıdır

// setTouched metodu ise, tüm form alanlarını dokunulmuş olarak işaretlemek için kullanılır

// isValid metodu, formun geçerli olup olmadığını hesaplar ve boolean değer olarak döndürür. Eğer tüm form alanları doğrulanmışsa (hata yoksa) true değerini döndürür, aksi takdirde false değerini döndürür.

// validateOnMount prop Formik kütüphanesi tarafından sunulan bir özelliktir. Bu prop, formun sayfa yüklendiğinde doğrulanıp doğrulanmayacağını kontrol eder. Bu özellik, form sayfasının ilk yüklemede veya yenilemede doğrulanmasını sağlar.

// Formik'de dirty prop'u, formun değerlerinde herhangi bir değişiklik olup olmadığını kontrol eder. Bu prop, formun ilk yüklenmesinden veya sıfırlanmasından sonra bile true veya false değerleri alabilir.

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

// validasyon hata mesajlarını ayrı olarakta yonetebiliriz.
const validateComments = (value) => {
	let error = {};
	if (!value) {
		error = 'Zorunlu';
	}
	return error;
};

const YouTubeForm = () => {
	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={false} validateOnBlur={true} validateOnMount={true}>
			{(formik) => {
				console.log('formik porps', formik);
				return (
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
							<Field as="textarea" type="text" id="comments" name="comments" validate={validateComments} />
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
						<div className="form-control">
							<button disabled={!formik.dirty && !formik.isValid} type="submit">
								Submit
							</button>
						</div>
						<div className="form-control">
							<button onClick={() => formik.validateField('comments')} type="button">
								Validate Comments
							</button>
						</div>
						<div className="form-control">
							<button onClick={() => formik.validateForm()} type="button">
								Validate All
							</button>
						</div>
						<div className="form-control">
							<button onClick={() => formik.setFieldTouched('comments')} type="button">
								Visit comments
							</button>
						</div>
						<div className="form-control">
							<button onClick={() => formik.setTouched({ name: true, email: true, channel: true, comments: true })} type="button">
								Visit fields
							</button>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
};

export default YouTubeForm;

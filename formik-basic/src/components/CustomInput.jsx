import { useField } from 'formik';

const CustomInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label>{label}</label>
			<input {...field} {...props} className={meta.error ? 'input-error' : ''} />
			{meta.error && <p className="error">{meta.error}</p>}
		</>
	);
};

export default CustomInput;

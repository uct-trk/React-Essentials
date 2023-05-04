import { useField } from 'formik';

const CustomSelect = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label>{label}</label>
			<select {...field} {...props} className={meta.error ? 'input-error' : ''}>
				<option value="">Üniversite Seçiniz</option>
				<option value="bagazici">bagazici</option>
				<option value="gsu">gsu</option>
				<option value="odtu">odtu</option>
				<option value="itu">itu</option>
			</select>
			{meta.error && <p className="error">{meta.error}</p>}
		</>
	);
};

export default CustomSelect;

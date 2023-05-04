import { useField } from 'formik';

const CustomCheckbox = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<div className="checkbox">
				<input style={{ width: 'auto', marginRight: '10px' }} {...field} {...props} className={meta.error ? 'input-error' : ''} />
				<span>Kullanım koşullarını kabul ediyorum</span>
			</div>
			{meta.error && <p className="error">{meta.error}</p>}
		</>
	);
};

export default CustomCheckbox;

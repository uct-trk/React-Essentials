const FormikControl = (props) => {
	const { control } = props;
	switch (control) {
		case 'input':
		case 'textarea':
		case 'select':
		case 'radio':
		case 'checkbox':
		case 'datepicker':
		default:
			return null;
	}
};

export default FormikControl;

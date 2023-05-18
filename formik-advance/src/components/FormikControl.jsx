import Checkbox from './Checkbox';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import TextArea from './TextArea';

const FormikControl = (props) => {
	const { control, ...rest } = props;
	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'textarea':
			return <TextArea {...rest} />;
		case 'select':
			return <Select {...rest} />;
		case 'radio':
			return <Radio {...rest} />;
		case 'checkbox':
			return <Checkbox {...rest} />;
		case 'datepicker':
		default:
			return null;
	}
};

export default FormikControl;

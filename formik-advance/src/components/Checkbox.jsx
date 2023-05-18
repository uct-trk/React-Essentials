import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const Checkbox = (props) => {
	const { label, name, options, ...rest } = props;
	return (
		<div className="form-control">
			<label htmlFor={label}>{label}</label>
			<Field name={name}>
				{({ field }) =>
					options?.map((checkbox) => {
						return (
							<React.Fragment key={checkbox.key}>
								<input type="checkbox" id={checkbox.value} {...field} value={checkbox.value} checked={field.value.includes(checkbox.value)} />
								<label htmlFor={checkbox.value}>{checkbox.key}</label>
							</React.Fragment>
						);
					})
				}
			</Field>

			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default Checkbox;

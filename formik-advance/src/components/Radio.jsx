import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const Radio = (props) => {
	const { label, name, options, ...rest } = props;
	return (
		<div className="form-control">
			<label htmlFor={label}>{label}</label>
			<Field name={name}>
				{({ field }) =>
					options?.map((option) => {
						return (
							<React.Fragment key={option.key}>
								<input type="radio" id={option.value} {...field} value={option.value} checked={field.value === option.value} />
								<label htmlFor={option.value}>{option.key}</label>
							</React.Fragment>
						);
					})
				}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default Radio;

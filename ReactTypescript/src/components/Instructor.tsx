import { instructorProps } from './types';

const Instructor = ({ instructor }: instructorProps) => {
	return (
		<div>
			Eğitmen bilgisi: {instructor.firstName} {instructor.lastName}
		</div>
	);
};

export default Instructor;

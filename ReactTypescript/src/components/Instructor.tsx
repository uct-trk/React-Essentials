type instructorProps = {
	instructor: {
		firstName: string;
		lastName: string;
	};
};

const Instructor = ({ instructor }: instructorProps) => {
	return (
		<div>
			Eğitmen bilgisi: {instructor.firstName} {instructor.lastName}
		</div>
	);
};

export default Instructor;

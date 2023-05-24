type InstructorList = {
	instructorList: Array<InstructorObje>;
};

type InstructorObje = {
	id: number;
	firstName: string;
	lastName: string;
};

const InstructorList = ({ instructorList }: InstructorList) => {
	return (
		<div>
			{instructorList?.map((i) => {
				return (
					<div key={i.id}>
						{i.firstName} {i.lastName}
					</div>
				);
			})}
		</div>
	);
};

export default InstructorList;

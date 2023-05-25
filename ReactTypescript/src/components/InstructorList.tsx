import { InstructorListType } from './types';

export const InstructorList = ({ instructorList }: InstructorListType) => {
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

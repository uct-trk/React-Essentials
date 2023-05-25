export type instructorProps = {
	instructor: {
		firstName: string;
		lastName: string;
	};
};

export type InstructorListType = {
	instructorList: Array<InstructorObje>;
};

type InstructorObje = {
	id: number;
	firstName: string;
	lastName: string;
};

export type RequestProps = {
	status: 'loading' | 'success' | 'error';
};

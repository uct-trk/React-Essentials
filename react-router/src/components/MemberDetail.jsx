import { useParams } from 'react-router-dom';

// useParams ile url de verilen parametreleri alır ve bir nesne olarak döndürür

const MemberDetail = () => {
	const { memberId } = useParams();

	return (
		<div>
			<h1>Member Detail {memberId}</h1>
		</div>
	);
};

export default MemberDetail;

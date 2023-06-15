import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store/slices/courseSlice';

const CourseSearch = () => {
	const { searchTerm } = useSelector((state) => state.courses);
	const dispatch = useDispatch();

	return (
		<div className="listHeader mx-4 mb-3">
			<h3 className="title is-3">Kurslarım</h3>
			<div className="search field is-horizontal">
				<label className="label">Ara</label>
				<input type="text" className="input" value={searchTerm} onChange={(e) => dispatch(changeSearchTerm(e.target.value))} />
			</div>
		</div>
	);
};

export default CourseSearch;

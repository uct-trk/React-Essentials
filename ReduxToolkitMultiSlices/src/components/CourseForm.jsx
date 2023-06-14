import { useDispatch, useSelector } from 'react-redux';
import { changeDesc, changeName, changePrice } from '../store/slices/formSlice';
import { addCourse } from '../store/slices/courseSlice';

const CourseForm = () => {
	const { name, description, cost } = useSelector((state) => state.form);

	const dispatch = useDispatch();
	const handleNameChange = (e) => {
		let val = e.target.value;
		dispatch(changeName(val));
	};
	const handleDescChange = (e) => {
		let val = e.target.value;
		dispatch(changeDesc(val));
	};
	const handlePriceChange = (e) => {
		let val = e.target.value;
		dispatch(changePrice(val));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addCourse({
				name,
				description,
				cost,
			}),
		);
	};
	return (
		<div className="courseForm panel">
			<h4 className="subTitle is-3">Kurs ekle</h4>
			<form action="">
				<div className="field-group">
					<div className="field">
						<label className="label">Ad</label>
						<input className="input is-expanded" value={name} onChange={handleNameChange} />
					</div>
					<div className="field">
						<label className="label">Açıklama</label>
						<textarea className="input is-expanded" value={description} onChange={handleDescChange} />
					</div>
					<div className="field">
						<label className="label">Fiyat</label>
						<input className="input is-expanded" type="number" value={cost} onChange={handlePriceChange} />
					</div>
					<div className="field">
						<button className="button is-primary" onClick={handleSubmit}>
							Kaydet
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CourseForm;

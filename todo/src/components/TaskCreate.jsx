import { useContext, useState } from 'react';
import TasksContext from '../context/task';

const TaskCreate = ({ task, isTaskEdit, index, setShowEdit }) => {
	const [title, setTitle] = useState(task ? task.title : '');
	const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

	const { createTask, handleUpdate } = useContext(TasksContext);

	const handleTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleTaskDesc = (e) => {
		setTaskDesc(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isTaskEdit) {
			setShowEdit(false);
			handleUpdate(task.id, title, taskDesc);
		} else {
			createTask(title, taskDesc);
		}
		setTitle('');
		setTaskDesc('');
	};

	return (
		<>
			{isTaskEdit ? (
				<>
					<div className="upt-wrapper">
						<h3>{index + 1}. Görev Güncelle</h3>
						<form className="task-form">
							<div className="input-wrapper-upt">
								<label>Başlık</label>
								<input type="text" value={title} onChange={handleTitle} />
							</div>
							<div className="input-wrapper-upt">
								<label>Görev</label>
								<textarea type="text" value={taskDesc} onChange={handleTaskDesc} />
							</div>
							<div className="button-wrapper-upt">
								<button disabled={!taskDesc || !title} className="button-success" onClick={handleSubmit}>
									Güncelle
								</button>
							</div>
						</form>
					</div>
				</>
			) : (
				<>
					<div>
						<h3>Görev Ekleyiniz</h3>
						<form className="task-form">
							<div className="input-wrapper">
								<label>Başlık</label>
								<input type="text" value={title} onChange={handleTitle} />
							</div>
							<div className="input-wrapper">
								<label>Görev</label>
								<textarea type="text" value={taskDesc} onChange={handleTaskDesc} />
							</div>
							<div className="button-wrapper">
								<button disabled={!taskDesc || !title} className="button-success" onClick={handleSubmit}>
									Oluştur
								</button>
							</div>
						</form>
					</div>
				</>
			)}
		</>
	);
};

export default TaskCreate;

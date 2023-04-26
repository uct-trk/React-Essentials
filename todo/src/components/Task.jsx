import { useState } from 'react';
import TaskCreate from './TaskCreate';

const Task = ({ task, onDelete, index, handleUpdate }) => {
	const [showEdit, setShowEdit] = useState(false);

	const handleDeleteClick = () => {
		onDelete(task?.id);
	};

	const handleEditClick = () => {
		setShowEdit(true);
	};

	const updateTask = (id, title, taskDesc) => {
		setShowEdit(false);
		handleUpdate(id, title, taskDesc);
	};

	return (
		<>
			{showEdit ? (
				<div className="task-card">
					<TaskCreate index={index} task={task} isTaskEdit={true} onUpdate={updateTask} />
				</div>
			) : (
				<div className="task-card">
					<h3>
						{index + 1} {index >= 0 ? '.' : ''} Göreviniz
					</h3>
					<p>{task.title}</p>
					<h3>Yapılacaklar</h3>
					<p>{task.taskDesc}</p>
					<div className="button-status">
						<button onClick={handleDeleteClick} className="button-danger">
							Sil
						</button>
						<button onClick={handleEditClick} className="button-success">
							Güncelle
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Task;

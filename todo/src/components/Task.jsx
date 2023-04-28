import { useContext, useState } from 'react';
import TasksContext from '../context/task';
import TaskCreate from './TaskCreate';

const Task = ({ task, index }) => {
	const { handleDelete, handleUpdate } = useContext(TasksContext);
	const [showEdit, setShowEdit] = useState(false);

	const handleDeleteClick = () => {
		handleDelete(task?.id);
	};

	const handleEditClick = () => {
		setShowEdit(true);
	};

	return (
		<>
			{showEdit ? (
				<div className="task-card">
					<TaskCreate index={index} task={task} isTaskEdit={true} setShowEdit={setShowEdit} />
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

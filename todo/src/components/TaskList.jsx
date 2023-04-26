import Task from './Task';
import '../App.css';

const TaskList = ({ tasks, onDelete, handleUpdate }) => {
	return (
		<div className="task-wrapper">
			{tasks?.map((task, index) => (
				<div key={task.id}>
					<Task index={index} task={task} onDelete={onDelete} handleUpdate={handleUpdate} />
				</div>
			))}
		</div>
	);
};

export default TaskList;

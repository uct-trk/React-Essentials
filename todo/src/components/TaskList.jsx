import Task from './Task';
import '../App.css';
import { useContext } from 'react';
import TasksContext from '../context/task';

const TaskList = () => {
	const { tasks } = useContext(TasksContext);

	return (
		<div className="task-wrapper">
			{tasks?.map((task, index) => (
				<div key={task.id}>
					<Task index={index} task={task} />
				</div>
			))}
		</div>
	);
};

export default TaskList;

import { createContext, useState } from 'react';
import axios from 'axios';

const TasksContext = createContext();

function Provider({ children }) {
	const [tasks, setTasks] = useState([]);

	// get all tasks
	const fetchTasks = async () => {
		const response = await axios.get('http://localhost:3000/tasks');
		setTasks(response.data);
	};

	// delete task
	const handleDelete = async (id) => {
		await axios.delete(`http://localhost:3000/tasks/${id}`);
		const afterDeleting = tasks?.filter((task) => {
			return task.id !== id;
		});
		setTasks(afterDeleting);
	};

	// create new task
	const createTask = async (title, taskDesc) => {
		const response = await axios.post('http://localhost:3000/tasks', {
			title,
			taskDesc,
		});

		const createdTasks = [...tasks, response.data];
		setTasks(createdTasks);
	};

	// update task
	const handleUpdate = async (id, title, taskDesc) => {
		await axios.put(`http://localhost:3000/tasks/${id}`, {
			title,
			taskDesc,
		});
		const updatedTask = tasks.map((task) => {
			if (task.id === id) {
				return { id: id, title: title, taskDesc: taskDesc };
			}
			return task;
		});
		setTasks(updatedTask);
	};

	const sharedValues = {
		tasks,
		createTask,
		fetchTasks,
		handleDelete,
		handleUpdate,
	};

	return <TasksContext.Provider value={sharedValues}>{children}</TasksContext.Provider>;
}

export { Provider };

export default TasksContext;

import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [tasks, setTasks] = useState([]);

	// get akk tasks
	const fetchTasks = async () => {
		const response = await axios.get('http://localhost:3000/tasks');
		setTasks(response.data);
	};

	useEffect(() => {
		fetchTasks();
	}, []);

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

	return (
		<div>
			<TaskCreate onCreate={createTask} />
			{tasks.length > 0 ? <h1>Görevler</h1> : ''}
			<TaskList tasks={tasks} onDelete={handleDelete} handleUpdate={handleUpdate} />
		</div>
	);
}

export default App;

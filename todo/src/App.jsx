import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import './App.css';
import { useContext, useEffect } from 'react';
import TasksContext from './context/task';

function App() {
	const { tasks, fetchTasks } = useContext(TasksContext);

	useEffect(() => {
		fetchTasks();
	}, []);

	return (
		<div>
			<TaskCreate />
			{tasks.length > 0 ? <h1>Görevler</h1> : ''}
			<TaskList />
		</div>
	);
}

export default App;

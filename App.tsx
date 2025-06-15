import { CssBaseline, Container, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useThemeContext, ThemeProvider as CustomThemeProvider } from './context/ThemeContext';

import useLocalStorage from './hooks/useLocalStorage';
import type { Task } from './types/Task';
import Navbar from './components/Navbar';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import SortButtons from './components/SortButtons'; 
import './App.css';

function AppContent() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'status'>('date');

  const { theme } = useThemeContext();

  useEffect(() => {
    document.title = 'Todo App';


    if (theme.palette.mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme.palette.mode]);

  const handleAddTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now(),
      createdAt: new Date(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks((prev) => prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleReorderTasks = (updatedTasks: Task[]) => {
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'completed') return task.completed;
      if (filter === 'pending') return !task.completed;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); 
      } else if (sortBy === 'status') {
        return Number(a.completed) - Number(b.completed); 
      }
      return 0;
    });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container className="container" maxWidth="md">
        <AddTaskForm onAdd={handleAddTask} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <SortButtons sortBy={sortBy} setSortBy={setSortBy} /> {}
        <TaskList
          tasks={filteredTasks}
          onReorder={handleReorderTasks}
          onUpdate={handleUpdateTask}
          onDelete={handleDeleteTask}
          sortBy={sortBy}
        />
      </Container>
    </MuiThemeProvider>
  );
}

export default function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

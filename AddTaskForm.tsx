import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { Task } from '../types/Task';

interface AddTaskFormProps {
  onAdd: (task: Omit<Task, 'id' | 'createdAt'>) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description: description.trim() || undefined, completed: false });
    setTitle('');
    setDescription('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={2}
        mb={2}
      >
        <TextField
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
      </Box>

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
        Add Task
      </Button>
    </Box>
  );
};

export default AddTaskForm;

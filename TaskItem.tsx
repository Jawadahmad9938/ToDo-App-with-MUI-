import { useState } from 'react';
import {
  ListItem,
  Checkbox,
  IconButton,
  TextField,
  Box,
  Typography,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');

  const handleToggle = () => {
    onUpdate({ ...task, completed: !task.completed });
  };

  const handleEdit = () => {
    if (isEditing && title.trim()) {
      onUpdate({ ...task, title, description: description.trim() || undefined });
    }
    setEditing(!isEditing);
  };

  return (
    <ListItem
      divider
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2,
        py: 1.5,
      }}
    >
      <Checkbox checked={task.completed} onChange={handleToggle} />

      {isEditing ? (
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            size="small"
            sx={{ mb: 1 }}
          />
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            size="small"
          />
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="body1"
            sx={{
              textDecoration: task.completed ? 'line-through' : 'none',
              fontWeight: 500,
              color: task.completed ? 'gray' : 'inherit',
            }}
          >
            {task.title}
          </Typography>

          {task.description && (
            <Typography variant="body2" color="text.secondary">
              {task.description}
            </Typography>
          )}

          <Typography variant="caption" color="text.secondary">
            Created: {new Date(task.createdAt).toLocaleDateString()} •{' '}
            Status: {task.completed ? 'Completed ✅' : 'Pending ⏳'}
          </Typography>
        </Box>
      )}

      <Box>
        <IconButton onClick={handleEdit} size="small">
          <Edit fontSize="small" />
        </IconButton>
        <IconButton onClick={() => onDelete(task.id)} size="small">
          <Delete fontSize="small" />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default TaskItem;

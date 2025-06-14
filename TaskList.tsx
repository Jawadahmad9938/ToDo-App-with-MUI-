import { List, Typography } from '@mui/material';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DraggableProvided,
} from 'react-beautiful-dnd';
import TaskItem from './TaskItem';
import { Task } from '../types/Task';


interface TaskListProps {
  tasks: Task[];
  onReorder: (updatedTasks: Task[]) => void;  
  onUpdate: (task: Task) => void;            
  onDelete: (id: number) => void;
  sortBy: 'date' | 'status';
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onReorder,
  onUpdate,
  onDelete,
  sortBy,
}) => {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, movedTask);

    onReorder(updatedTasks);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); 
    } else {
      return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
    }
  });

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided: DroppableProvided) => (
          <List
            {...provided.droppableProps}
            ref={provided.innerRef}
            sx={{ width: '100%', maxWidth: 600, margin: '0 auto' }}
          >
            {sortedTasks.length > 0 ? (
              sortedTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                  {(provided: DraggableProvided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TaskItem
                        task={task}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                      />
                    </div>
                  )}
                </Draggable>
              ))
            ) : (
              <Typography align="center" color="text.secondary">
                No tasks found
              </Typography>
            )}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;

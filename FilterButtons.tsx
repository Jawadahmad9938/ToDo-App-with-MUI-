import { Button, ButtonGroup } from '@mui/material';

interface FilterButtonsProps {
  filter: 'all' | 'completed' | 'pending';
  setFilter: React.Dispatch<React.SetStateAction<'all' | 'completed' | 'pending'>>;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filter, setFilter }) => {
  return (
    <ButtonGroup variant="contained" fullWidth sx={{ mb: 2 }}>
      <Button
        variant={filter === 'all' ? 'contained' : 'outlined'}
        onClick={() => setFilter('all')}
      >
        All
      </Button>
      <Button
        variant={filter === 'completed' ? 'contained' : 'outlined'}
        onClick={() => setFilter('completed')}
      >
        Completed
      </Button>
      <Button
        variant={filter === 'pending' ? 'contained' : 'outlined'}
        onClick={() => setFilter('pending')}
      >
        Pending
      </Button>
    </ButtonGroup>
  );
};

export default FilterButtons;
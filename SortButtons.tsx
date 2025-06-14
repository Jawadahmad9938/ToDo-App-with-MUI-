import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

type SortBy = 'date' | 'status';

interface SortButtonsProps {
  sortBy: SortBy;
  setSortBy: (value: SortBy) => void;
}

const SortButtons: React.FC<SortButtonsProps> = ({ sortBy, setSortBy }) => {
  const handleChange = (_e: React.MouseEvent<HTMLElement>, newSort: SortBy | null) => {
    if (newSort !== null) {
      setSortBy(newSort);
    }
  };

  return (
    <ToggleButtonGroup
      value={sortBy}
      exclusive
      onChange={handleChange}
      color="primary"
      size="small"
      sx={{ marginBottom: 2 }}
    >
      <ToggleButton value="date">Sort by Date</ToggleButton>
      <ToggleButton value="status">Sort by Status</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SortButtons;

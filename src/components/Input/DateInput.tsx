import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date"
        sx={{
          m: 1,
          width: 160,
          boxShadow: 'none',
          '.MuiOutlinedInput-notchedOutline': { border: 0 },
          '&>*:focus-visible': { outline: 'none' },
          '.MuiButtonBase-root': { padding: 0, right: 10 },
          input: {
            fontSize: '14px',
            padding: '10px',
          },
          label: { fontSize: '14px', top: '-7px' },
          '.MuiInputLabel-shrink': { top: '3px' },
        }}
      />
    </LocalizationProvider>
  );
}

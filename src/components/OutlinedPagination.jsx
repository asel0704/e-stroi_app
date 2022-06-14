import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export function OutlinedPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" color='warning' style={{ marginLeft: '250px', position: 'sticky', marginTop: '50px' }} />
    </Stack>
    
  );
}
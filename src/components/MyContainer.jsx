import { Box } from '@mui/material';
import React from 'react';

export default function MyContainer({children}) {
    return (
        <Box sx={{ px: '16px'}}>
            {children}
        </Box>
    )
}
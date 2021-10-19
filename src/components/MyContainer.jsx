import { Box } from '@mui/material';
import React from 'react';

export default function MyContainer({children}) {
    return (
        <Box sx={{mx: '13%', px: '16px'}}>
            {children}
        </Box>
    )
}
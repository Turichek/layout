import { Typography } from '@mui/material';
import React from 'react';

export default function Text({ size, text, variant, col }) {
    return (
        <Typography sx={{
            fontSize: size + 'px', color:
                col === "white" ? 'white' :
                col === "primary" ? '#1976d2' : 'black'
        }} variant={variant}>{text}</Typography>
    )
}
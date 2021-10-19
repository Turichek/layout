import { Box } from '@mui/material';
import React from 'react';
import Text from '../typography/Text';
import styles from './textForInfo.module.css';

export default function TextForInfo({title,text}) {
    return (
        <Box className={styles.text_container}>
            <Text size={64} text={title} variant={'h2'} />
            <Box sx={{ my: 4 }}>
                <Text size={28} text={text} variant={'body2'} />
            </Box>
        </Box>
    )
}
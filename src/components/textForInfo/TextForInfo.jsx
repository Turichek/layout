import { Box } from '@mui/material';
import React from 'react';
import Text from '../typography/Text';
import styles from './textForInfo.module.css';

export default function TextForInfo({title,text}) {
    return (
        <Box className={styles.text_container}>
            <Text text={title} variant={'h2'} />
            <Box sx={{ my: 4 }}>
                <Text text={text} variant={'body1'} />
            </Box>
        </Box>
    )
}
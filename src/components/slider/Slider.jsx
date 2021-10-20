import { Box, Button } from '@mui/material';
import React from 'react';
import styles from './Slider.module.css';
import clsx from 'clsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Slider({ image }) {
    return (
        <Box className={styles.container}>
            <Box className={styles.tabs_image}>
                <Box className={clsx(styles.tab, styles.active)}></Box>
                <Box className={styles.tab}></Box>
                <Box className={styles.tab}></Box>
            </Box>
            <img src={image} alt="" />
            <Box className={styles.button_container}>
                <Button sx={{ mx: 0.2, minWidth: '52px', height: '52px', p: 0 }} variant="contained"><ArrowBackIcon /></Button>
                <Button sx={{ mx: 0.2, minWidth: '52px', height: '52px', p: 0 }} variant="contained"><ArrowForwardIcon /></Button>
            </Box>
        </Box>
    )
}
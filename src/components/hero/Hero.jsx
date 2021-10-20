import { Box, Button } from '@mui/material';
import React from 'react';
import Text from '../typography/Text';
import styles from './Hero.module.css';

export default function Hero({ image }) {
    return (
        <Box className={styles.content}>
            <Box>
                <img src={image} alt="..." />
            </Box>
            <Box className={styles.text_container}>
                <Text text={"Lorem ipsum dolor sit amet elit, sed do eiusmod"} variant={'h1'} />
                <Button sx={{width:"250px", mt:5}} variant='contained' size='large'>Get In Touch</Button>
            </Box>
        </Box>
    )
}
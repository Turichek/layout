import { Box, Button } from '@mui/material';
import React from 'react';
import Text from '../typography/Text';
import styles from './title.module.css';

export default function Title() {
    return (
       <Box className={styles.content}>
           <Text sx={{color:'white'}} text={"Lorem ipsum dolor"} variant={"overline"} col={'white'}/>
           <Text text={"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"} variant={"h1"} col={'white'}/>
           <Button sx={{width:"250px", mt:5}} color="error" variant='contained' size='large'>Get In Touch</Button>
       </Box>
    )
}
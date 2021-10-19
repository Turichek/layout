import { Box } from '@mui/material';
import React from 'react';
import TextForInfo from '../textForInfo/TextForInfo';
import styles from './infovar3.module.css';

export default function Infovar3({image}) {
    return (
        <Box className={styles.container}>
            <Box className={styles.text_container}> 
                <TextForInfo title={"Lorem ipsum dolor sit amet consectetur."}
                    text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur cumque pariatur rem temporibus iste totam aperiam debitis modi, inventore blanditiis, voluptatibus laboriosam accusamus maxime?"} />
            </Box>
            <Box className={styles.img_container}>
                <img className={styles.to_img} src={image} alt=""/>
            </Box>
        </Box>
    )
}
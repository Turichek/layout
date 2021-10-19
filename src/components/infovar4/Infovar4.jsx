import { Box } from '@mui/material';
import React from 'react';
import TextForInfo from '../textForInfo/TextForInfo';
import styles from './infovar4.module.css';

export default function Infovar4({image1,image2,image3}) {
    return (
        <Box className={styles.container}>
            <Box>
                <Box className={styles.imgs_container}>
                    <Box><img className={styles.to_img1} src={image1} alt=""/></Box>
                    <Box><img className={styles.to_img2} src={image2} alt=""/></Box>
                </Box>
                <Box className={styles.text_container}>
                    <TextForInfo title={"Lorem ipsum dolor sit amet consectetur."}
                        text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur cumque pariatur rem temporibus iste totam aperiam debitis modi, inventore blanditiis, voluptatibus laboriosam accusamus maxime?"} />
                </Box>
            </Box>
            <Box className={styles.img_container}>
                <img className={styles.to_img3} src={image3} alt=""/>
            </Box>
        </Box>
    )
}
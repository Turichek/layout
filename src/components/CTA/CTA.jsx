import { Box, Button } from '@mui/material';
import React from 'react';
import Text from '../typography/Text';
import styles from './CTA.module.css';
import Line from '../images/line.png'

export default function CTA() {
    return (
        <Box className={styles.cta_container}>
            <img className={styles.to_svg} src={Line} alt='' />
            <Box className={styles.p115px}>
                <Text text={"Lorem ipsum dolor sit amet."} variant={'h4'} col={"white"} />
                <Box sx={{ mt: 4 }}>
                    <Text text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti consequuntur cumque quos quis repellendus quisquam, fugit explicabo facilis totam?"}
                        variant={'body2'} col={"white"} />
                </Box>
            </Box>
            <Box className={styles.p115px}>
                <Button sx={{ width: "250px"}} color="error" variant='contained' size='large'><b>Get In Touch</b></Button>
            </Box>
        </Box>
    )
}
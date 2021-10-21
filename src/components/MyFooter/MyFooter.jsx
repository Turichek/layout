import { Box } from '@mui/material';
import React from 'react';
import Text from '../typography/Text';
import styles from './MyFooter.module.css';

export default function MyFooter() {
    return (
        <>
            <hr className={styles.for_hr}/>
            <Box className={styles.content}>

                <Text text={"© 2019-2021 All Rights Reserved."} variant={'caption'} col={'gray'} />
                <Text text={"Terms of Service"} variant={'caption'} />
            </Box>
        </>
    )
}
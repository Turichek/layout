import { Avatar, Box } from '@mui/material';
import React from 'react';
import styles from './Review.module.css';
import Text from '../typography/Text';

export default function Review({ avatar }) {
    return (
        <Box className={styles.container}>
            <Box className={styles.text_container}>
                <Text text={'“Every single person comes away and says - wow that\'s a really slick experience, that was so easy to use. I feel so much less stressed as I now know we’re doing everything by the book”'}
                    variant={'h4'} />
            </Box>
            <Box className={styles.avatar_container}>
                <Avatar sx={{ mr: 4, width: '80px', height: '80px', }} size="large" src={avatar} />
                <Box>
                    <Text text={'Andry Ford'} variant={'subtitle2'} />
                    <Text text={'CEO at Whatever'} variant={'body1'} />
                </Box>
            </Box>
        </Box>
    )
}
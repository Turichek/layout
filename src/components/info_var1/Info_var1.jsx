import { Box, Link } from '@mui/material';
import React from 'react';
import Text from '../typography/Text';
import styles from './info_var1.module.css';
import clsx from 'clsx';

export default function Info_var1({image,revers}) {
    return (
        <Box className={clsx(styles.content ,revers === "revers" ? styles.revers  : styles.norevers )}>
            <Box>
                <img src={image} alt="..."/>
            </Box>
            <Box className={styles.text_container}>
                <Text size={52} text={"Adipisicing elit. Et, similique doloremque"} variant={'h3'} />
                <Text size={28} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dignissimos minus aut corporis quae alias, eum, similique doloremque tenetur modi voluptatibus vel obcaecati dolorem delectus?"} variant={'body2'} />
                <Link underline="always" variant='body1'><Text sx={{pt:1}} size={21} text={"Lorem ipsum dolor"} variant={"body2"} col={"primary"}/></Link>
            </Box>
        </Box>
    )
}
import { Box, Grid, Link } from '@mui/material';
import React from 'react';
import Text from '../typography/Text';
import styles from './infovar1.module.css';
import clsx from 'clsx';

export default function Infovar1({ image, revers }) {
    //, revers === "revers" ? styles.revers : styles.norevers
    return (
        <Grid sx={{ my: 13, mx: 0.1 }} container spacing={2} direction={revers === "revers" ? 'row-reverse' : 'row'}>
            <Grid container xl={6} justifyContent={'center'}>
                <img className={styles.to_img} src={image} alt="..." />
            </Grid>
            <Grid item xl={1} lg={12} />
            <Grid container xl={5} justifyContent={'center'} direction={'column'} >
                <Text text={"Adipisicing elit. Et, similique doloremque"} variant={'h3'} />
                <Box sx={{ my: 4 }}>
                    <Text text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dignissimos minus aut corporis quae alias, eum, similique doloremque tenetur modi voluptatibus vel obcaecati dolorem delectus?"}
                        variant={'body1'} />
                </Box>
                <Link underline="always" variant='body1'><Text sx={{ pt: 1 }} text={"Lorem ipsum dolor"} variant={"subtitle2"} col={"primary"} /></Link>
            </Grid>
        </Grid>
    )
}
import { Grid } from '@mui/material';
import React from 'react';
import { ResponsivButton,Img2 } from '../myStyledComponents';
import Text from '../typography/Text';

export default function Hero({ image }) {
    return (
        <Grid container justifyContent={'space-between'}>
            <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
                <Img2 src={image} alt="..." />
            </Grid>
            <Grid sx={{my:2}} item container xl={5} lg={5} md={5} sm={5} xs={12} alignItems={'center'} justifyContent={'center'}>
                <Grid item xl={10} lg={10} md={10} sm={11} xs={11} >
                    <Text text={"Lorem ipsum dolor sit amet elit, sed do eiusmod"} variant={'h1'} />
                    <ResponsivButton sx={{my:2}} variant='contained' size='large'>Get In Touch</ResponsivButton>
                </Grid>
            </Grid>
        </Grid>
    )
}
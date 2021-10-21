import { Grid } from '@mui/material';
import React from 'react';
import Text from '../typography/Text';
import Line from '../images/line.png'
import { MarginGrid280, MyBox, ResponsivButton, CTAGrid } from '../myStyledComponents';

export default function CTA() {
    return (
        <MarginGrid280 container sx={{ borderRadius: 5, backgroundColor: '#23242A' }}>
            <img style={{width:'30%',left: '65.2%',position: 'absolute'}} src={Line} alt='' />
            <CTAGrid sx={{mx:1}} item container justifyContent={'space-around'}>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                    <Text text={"Lorem ipsum dolor sit amet."} variant={'h4'} col={"white"} />
                    <MyBox>
                        <Text text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti consequuntur cumque quos quis repellendus quisquam, fugit explicabo facilis totam?"}
                            variant={'body2'} col={"white"} />
                    </MyBox>
                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={2} xs container justifyContent={'center'} alignItems={'flex-start'} >
                    <ResponsivButton color="error" variant='contained' size='large'><b>Get In Touch</b></ResponsivButton>
                </Grid>
            </CTAGrid>
        </MarginGrid280>
    )
}
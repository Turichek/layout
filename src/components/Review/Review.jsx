import { Grid } from '@mui/material';
import React from 'react';
import Text from '../typography/Text';
import { MarginGrid280,Img } from '../myStyledComponents';

export default function Review({ avatar }) {
    return (
        <MarginGrid280 container justifyContent={'center'} alignItems={'center'}>
            <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                <Text text={'“Every single person comes away and says - wow that\'s a really slick experience, that was so easy to use. I feel so much less stressed as I now know we’re doing everything by the book”'}
                    variant={'h4'} />
            </Grid>
            <Grid sx={{my:2}} item container xl={9} lg={9} md={9} sm={9} xs={9} alignItems={'center'} justifyContent={'space-around'}>
                <Grid item xs={1}>
                    <Img src={avatar} />
                </Grid>
                <Grid item xs={10}>
                    <Text text={'Andry Ford'} variant={'subtitle1'} />
                    <Text text={'CEO at Whatever'} variant={'body2'} />
                </Grid>
            </Grid>
        </MarginGrid280>
    )
}
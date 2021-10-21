import { Grid } from '@mui/material';
import React from 'react';
import { MyBox } from '../myStyledComponents';
import Text from '../typography/Text';

export default function TextForInfo({title,text}) {
    return (
        <Grid item xl={8} lg={8} md={8} sm={10} xs={12}>
            <Text text={title} variant={'h2'} />
            <MyBox sx={{ my: 4 }}>
                <Text text={text} variant={'body1'} />
            </MyBox>
        </Grid>
    )
}
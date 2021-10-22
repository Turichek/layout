import { Grid } from '@mui/material';
import React from 'react';
import { Img, MyBox, MarginGrid280 } from '../myStyledComponents';
import TextForInfo from '../textForInfo/TextForInfo';

export default function Infovar6({ image1, image2 }) {
    return (
        <MarginGrid280 container justifyContent={'space-between'}>
            <Grid item container justifyContent={'center'} xl={7} lg={7} md={7} sm={7} xs={12}>
                <Grid item container xl={8} lg={8} md={8} sm={10} xs={10} columns={{ xl: 8, lg: 8, md: 8, sm: 10, xs: 12 }}>
                    <MyBox>
                        <TextForInfo title={"Lorem ipsum dolor sit amet consectetur."}
                            text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur cumque pariatur rem temporibus iste totam aperiam debitis modi, inventore blanditiis, voluptatibus laboriosam accusamus maxime?"} />
                    </MyBox>
                </Grid>
                <Grid item container justifyContent={'center'} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Img src={image2} alt="" />
                </Grid>
            </Grid>
            <Grid sx={{my:1}} item container xl={4} lg={4} md={4} sm={4} xs={12} alignItems={"center"} justifyContent={'center'}>
                <Img src={image1} alt="" />
            </Grid>
        </MarginGrid280>
    )
}
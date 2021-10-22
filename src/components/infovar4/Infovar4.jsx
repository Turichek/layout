import { Grid } from '@mui/material';
import React from 'react';
import { Img, MarginGrid280, MyBox } from '../myStyledComponents';
import TextForInfo from '../textForInfo/TextForInfo';

export default function Infovar4({image1,image2,image3}) {
    return (
        <MarginGrid280 container justifyContent={'space-between'}>
            <Grid item container justifyContent={'center'} xl={8} lg={8} md={8} sm={8} xs={12}>
                <Grid item container alignItems={'center'} justifyContent={'space-around'} >
                    <Grid item container justifyContent={'center'} xl={7} lg={7} md={7} sm={7} xs={12}>
                        <Img src={image1} alt=""/>
                    </Grid>
                    <Grid sx={{my:1}} item container justifyContent={'center'} xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Img src={image2} alt=""/>
                    </Grid>
                </Grid>
                <Grid item container xl={8} lg={8} md={8} sm={9} xs={10} columns={{ xl: 8, lg: 8, md: 8, sm: 10, xs: 12 }}>
                    <MyBox>
                        <TextForInfo title={"Lorem ipsum dolor sit amet consectetur."}
                            text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur cumque pariatur rem temporibus iste totam aperiam debitis modi, inventore blanditiis, voluptatibus laboriosam accusamus maxime?"} />
                    </MyBox>
                </Grid>
            </Grid>
            <Grid item container xl={4} lg={4} md={4} sm={4} xs={12} alignItems={"center"} justifyContent={'center'}>
                <Img src={image3} alt=""/>
            </Grid>
        </MarginGrid280>
    )
}
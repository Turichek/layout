import { Box, Grid } from "@mui/material";
import React from "react";
import { MarginGrid280, MyBox, Img } from "../myStyledComponents";
import Text from "../typography/Text";

export default function Team({ images }) {
    return (
        <MarginGrid280 container direction={'column'} justifyContent={'space-between'}>
            <Grid item container justifyContent={'center'} textAlign={'center'}>
                <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                    <Text text={"Our leadership"} variant={'h2'} />
                    <MyBox>
                        <Text text={"Lorem, ipsum dolor sit amet consectetur rem, ipsum dolor amet consectetur sit elit Quisdam, magni? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magni?"}
                            variant={'body1'} />
                    </MyBox>
                </Grid>
            </Grid>
            <Grid item container sx={{my:6}}>
                {images.map((item, index) =>
                    <Grid sx={{my:1}} item xl={3} lg={3} md={3} sm={6} xs={12} container justifyContent={'center'} textAlign={'center'} key={index}>
                        <Grid item xl={11} lg={11} md={11} sm={11} xs={12}>
                            <Img src={item} alt="" />
                        </Grid>
                        <Grid item xl={11} lg={11} md={11} sm={11} xs={12}>
                            <MyBox>
                                <Text text={'Andry Ford'} variant={'subtitle1'} />
                                <Text text={'CEO at Whatever'} variant={'body2'} />
                            </MyBox>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </MarginGrid280>
    )
}
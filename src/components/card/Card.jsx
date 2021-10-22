import { Box, Link, Grid } from "@mui/material";
import React from "react";
import { CardPaper2, MarginGrid280, MyBox } from "../myStyledComponents";
import Text from "../typography/Text";

export default function Card() {
    const data = [
        {
            title: "Lorem",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, similique doloremque tenetur modi voluptatibus vel obcaecati dolorem delectus?"
        },
        {
            title: "Ipsum",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit tenetur modi voluptatibus vel obcaecati dolorem delectus?"
        },
        {
            title: "Dolor",
            text: "Lorem ipsum dolor tur modi voluptatibus vel obcaecati dolorem delectus?"
        }
    ]
    return (
        <MarginGrid280 container direction={'column'} justifyContent={'space-between'}>
            <Grid item container justifyContent={'space-between'}>
                <Grid item xl={8} lg={8} md={8} sm={9} xs={12}>
                    <Text text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magni?"} variant={'h3'} />
                </Grid>
                <Grid sx={{my:1}} item xl={2} lg={2} md={2} sm={3} xs={4}>
                    <Link underline="hover"><Text sx={{ pt: 1 }} text={"Lorem ipsum dolor ᐳ"} variant={"subtitle2"} col={"primary"} /></Link>
                </Grid>
            </Grid>
            <MyBox>
                <Grid item container justifyContent={'center'} >
                    {
                        data.map((item, index) =>
                            <CardPaper2 elevation={5} key={index}>
                                <Box>
                                    <Text text={item.title} variant={'h4'} />
                                    <MyBox >
                                        <Text text={item.text} variant={'body1'} />
                                    </MyBox>
                                </Box>
                                <Box>
                                    <hr />
                                    <Link underline="hover" variant='body1'><Text sx={{ pt: 1 }} text={"Lorem ipsum dolor"} variant={"subtitle2"} col={"primary"} /></Link>
                                </Box>
                            </CardPaper2>
                        )
                    }
                </Grid>
            </MyBox>
        </MarginGrid280>
    )
}
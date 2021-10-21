import { Grid } from '@mui/material';
import React from 'react';
import TextForInfo from '../textForInfo/TextForInfo';
import Text from '../typography/Text';
import warning from '../images/warning.png';
import clock from '../images/clock.png';
import { Img, MarginGrid280, MyBox } from '../myStyledComponents';

export default function Infovar2() {
    const data = [
        {
            image: warning,
            title: "Lorem ipsum dolor",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, similique doloremque tenetur modi voluptatibus vel obcaecati dolorem delectus?"
        },
        {
            image: clock,
            title: "Lorem ipsum amet consectetur",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tenetur modi voluptatibus vel obcaecati dolorem delectus?"
        },

    ]
    return (
        <MarginGrid280 container columns={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }} justifyContent={'space-between'} direction={'column'}>
            <Grid item container xl={12}>
                <TextForInfo title={"Lorem ipsum dolor sit amet consectetur."}
                    text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur cumque pariatur rem temporibus iste totam aperiam debitis modi, inventore blanditiis, voluptatibus laboriosam accusamus maxime?"} />
            </Grid>
            <Grid item container xl={12}>
                {
                    data.map((item, index) =>
                        <Grid item container spacing={1} xl={6} lg={6} md={6} columns={{ md: 12 }} key={index}>  {/*eslint-disable-line  */}
                            <Grid item xs={1} md={2}>
                                <Img src={item.image} alt="" />
                            </Grid>
                            <Grid item xs={11} md={10}>
                                <Text text={item.title} variant={'subtitle1'} />
                                <MyBox>
                                    <Text text={item.text} variant={'body2'} />
                                </MyBox>
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
        </MarginGrid280>
    )
}
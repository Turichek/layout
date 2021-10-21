import { Grid } from '@mui/material';
import React from 'react';
import { Img, MarginGrid280, MyBox } from '../myStyledComponents';
import TextForInfo from '../textForInfo/TextForInfo';

export default function Infovar3({image}) {
    return (
        <MarginGrid280 container direction={'column'} justifyContent={'space-between'}>
            <Grid item container justifyContent={'center'}> 
                <TextForInfo title={"Lorem ipsum dolor sit amet consectetur."}
                    text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur cumque pariatur rem temporibus iste totam aperiam debitis modi, inventore blanditiis, voluptatibus laboriosam accusamus maxime?"} />
            </Grid>
            <Grid item>
                <MyBox><Img src={image} alt=""/></MyBox>
            </Grid>
        </MarginGrid280>
    )
}
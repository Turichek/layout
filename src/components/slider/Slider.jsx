import { Grid } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MarginGrid280, Img2, ResponsivButton2} from '../myStyledComponents';

export default function Slider({ image }) {
    return (
        <MarginGrid280 sx={{ width: 1, position: 'relative' }} container direction={'column'}>
            <Grid item container justifyContent={'space-between'} columns={9}>
                <Grid sx={{height: '3px',backgroundColor: '#23242A'}} item xs></Grid>
                <Grid sx={{height: '3px'}} item xs></Grid>
                <Grid sx={{height: '3px'}} item xs></Grid>
            </Grid>
            <Img2 src={image} alt="" />
            <Grid item container justifyContent={'space-between'} sx={{position:'absolute',height:1}} >
                <ResponsivButton2 ><ArrowBackIcon sx={{width:0.3,height:0.3}} /></ResponsivButton2>
                <ResponsivButton2 ><ArrowForwardIcon sx={{width:0.3,height:0.3}}/></ResponsivButton2>
            </Grid>
        </MarginGrid280>
    )
}
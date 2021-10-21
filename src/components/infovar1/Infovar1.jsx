import { Grid, Link } from '@mui/material';
import React from 'react';
import Text from '../typography/Text';
import { Img, MyBox, MarginGrid144 } from '../myStyledComponents';

export default function Infovar1({ image, revers }) {
    return (
        <MarginGrid144 container columns={{ xl: 12, lg: 12, md: 12, sm:12, xs:12 }} direction={revers === "revers" ? 'row-reverse' : 'row'}>
            <Grid item container xl={6} justifyContent={'center'}>
                <Grid item xl={12} lg={6} md={8} sm={10} xs={10}>
                    <Img src={image} alt="..." />
                </Grid>
            </Grid>
            <Grid item xl lg md sm xs><span style={{visibility: 'hidden'}}><Text text={'123'} variant={'caption'}/></span></Grid>
            <Grid container xl={5} justifyContent={'center'} alignItems={'center'} >
                <Grid item xl={12} lg={8} md={9} sm={10} xs={10}>
                    <Text text={"Adipisicing elit. Et, similique doloremque"} variant={'h3'} />
                    <MyBox >
                        <Text text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dignissimos minus aut corporis quae alias, eum, similique doloremque tenetur modi voluptatibus vel obcaecati dolorem delectus?"}
                            variant={'body1'} />
                    </MyBox>
                    <Link underline="always" variant='body1'><Text sx={{ pt: 1 }} text={"Lorem ipsum dolor"} variant={"subtitle2"} col={"primary"} /></Link>
                </Grid>
            </Grid>
        </MarginGrid144>
    )
}
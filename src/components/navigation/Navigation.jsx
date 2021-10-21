import DehazeIcon from '@mui/icons-material/Dehaze';
import { Button, Link, Grid, IconButton, Collapse } from '@mui/material';
import React, { useState } from 'react';
import logo from '../images/Space_w.png'
import { BurgerMenu, Menu } from '../myStyledComponents';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    color: 'white',
    border: '2px solid white',
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Navigation() {
    const links = ["Home", "Temlates", "Price", "Help"];
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Grid container alignItems={'center'} justifyContent={'space-between'}>
                <img style={{ height: '30px', padding: '16px' }} src={logo} alt="Space" />
                <Menu sx={{ m: 2 }}>
                    {links.map((item, index) =>
                        <Link key={index} sx={{ color: 'white', mx: 3 }} underline="hover">{item}</Link>
                    )}
                    <Button sx={{ color: 'white', borderColor: 'white', ':hover': { borderColor: "white" } }}
                        variant="outlined"
                    >Get In Touch</Button>
                </Menu>
                <BurgerMenu sx={{ m: 2 }}>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <DehazeIcon />
                    </ExpandMore>
                </BurgerMenu>
            </Grid>
            <Collapse sx={{zIndex:'tooltip' }} in={expanded} timeout="auto" unmountOnExit>
                {links.map((item, index) =>
                    <Link key={index} sx={{color: 'white', my: 3, display: 'block', textAlign:'center' }} underline="hover">{item}</Link>
                )}
            </Collapse>
        </>
    )
}
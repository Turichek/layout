import { Button,Box,Link } from '@mui/material';
import React from 'react';
import Logo from './logo';
import styles from "./menu.module.css"
import Text from '../typography/Text';

export default function Navigation() {
    const links = ["Home", "Temlates", "Price", "Help"]
    return (
        <Box className={styles.nav}>
            <Logo/>
            <Box>
                <ul className={styles.nav_links}>
                    {
                        links.map((item,index) =>
                            <li key={index}>
                                <Link underline="hover"><Text sx={{pt:1}} size={21} text={item} variant={"body2"} col={'white'}></Text></Link>
                            </li>
                        )
                    }
                    <li>
                        <Button sx={{color:'white', borderColor: 'white'}} variant="outlined">Get In Touch</Button>
                    </li>
                </ul>
            </Box>
        </Box>
    )
}
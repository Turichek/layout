import { Box, Paper, Link, Button } from "@mui/material";
import React from "react";
import Text from "../typography/Text";
import styles from "./carusel.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Сarousel() {
    const data = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, similique doloremque tenetur modi voluptatibus vel obcaecati dolorem delectus?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dignissimos minus aut corporis quae alias, eum, similique doloremque tenetur modi voluptatibus vel obcaecati dolorem delectus?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dignissimos minus aut corporis voluptatibus vel obcaecati dolorem delectus?",
        "Lorem ipsum dolor sit amet consectetur voluptatibus vel obcaecati dolorem delectus?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptatibus vel obcaecati dolorem delectus?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dignissimos minus aut voluptatibus vel obcaecati dolorem delectus?"
    ]
    return (
        <>
            <Box className={styles.card_container}>
                {
                    data.map((item, index) =>
                        <Paper elevation={15} key={index} className={styles.card}>
                            <Text text={"Name"} variant={'h4'} />
                            <Text text={item} variant={'body2'} />
                            <Link underline="hover" variant='body1'><Text sx={{ pt: 1 }} text={"Lorem ipsum dolor"} variant={"subtitle2"} col={"primary"} /></Link>
                        </Paper>
                    )
                }
            </Box>
            <Box className={styles.button_container}>
                <Button><ArrowBackIcon sx={{ width: '52px', height: '52px' }} /></Button>
                <Button><ArrowForwardIcon sx={{ width: '52px', height: '52px' }} /></Button>
            </Box>
        </>
    )
}
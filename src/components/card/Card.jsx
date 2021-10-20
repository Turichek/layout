import { Box, Paper, Link } from "@mui/material";
import React from "react";
import Text from "../typography/Text";
import styles from "./card.module.css"

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
        <Box className={styles.container}>
            <Box className={styles.text_container}>
                <Box sx={{ width: '70%' }}>
                    <Text text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magni?"} variant={'h3'} />
                </Box>
                <Box>
                    <Link underline="hover"><Text sx={{ pt: 1 }} text={"Lorem ipsum dolor ᐳ"} variant={"subtitle2"} col={"primary"} /></Link>
                </Box>
            </Box>
            <Box className={styles.card_container}>
                {
                    data.map((item, index) =>
                        <Paper elevation={15} key={index} className={styles.card}>
                            <Box>
                                <Text text={item.title} variant={'h4'} />
                                <Box sx={{ my: 4 }}>
                                    <Text text={item.text} variant={'body1'} />
                                </Box>
                            </Box>
                            <Box>
                                <hr className={styles.my_36} />
                                <Link underline="hover" variant='body1'><Text sx={{ pt: 1 }} text={"Lorem ipsum dolor"} variant={"subtitle2"} col={"primary"} /></Link>
                            </Box>
                        </Paper>
                    )
                }
            </Box>
        </Box>
    )
}
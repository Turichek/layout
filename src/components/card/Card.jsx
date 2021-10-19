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
                    <Text size={52} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magni?"} variant={'h3'} />
                </Box>
                <Box>
                    <Link underline="hover" variant='body1'><Text sx={{ pt: 1 }} size={21} text={"Lorem ipsum dolor ᐳ"} variant={"body2"} col={"primary"} /></Link>
                </Box>
            </Box>
            <Box className={styles.card_container}>
                {
                    data.map((item, index) =>
                        <Paper elevation={15} key={index} className={styles.card}>
                            <Box>
                                <Text size={44} text={item.title} variant={'h4'} />
                                <Box sx={{ my: 4 }}>
                                    <Text size={24} text={item.text} variant={'body2'} />
                                </Box>
                            </Box>
                            <Box>
                                <hr className={styles.my_36} />
                                <Link underline="hover" variant='body1'><Text sx={{ pt: 1 }} size={21} text={"Lorem ipsum dolor"} variant={"body2"} col={"primary"} /></Link>
                            </Box>
                        </Paper>
                    )
                }
            </Box>
        </Box>
    )
}
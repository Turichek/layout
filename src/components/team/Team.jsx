import { Box } from "@mui/material";
import React from "react";
import Text from "../typography/Text";
import styles from "./Team.module.css"

export default function Team({ images }) {
    return (
        <Box className={styles.container}>
            <Box className={styles.text_container}>
                <Box className={styles.align_item_container}>
                    <Text text={"Our leadership"} variant={'h2'} />
                    <Box sx={{ mt: 6 }}>
                        <Text text={"Lorem, ipsum dolor sit amet consectetur rem, ipsum dolor amet consectetur sit elit Quisdam, magni? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magni?"}
                        variant={'subtitle1'} />
                    </Box>
                </Box>
            </Box>
            <Box className={styles.card_container}>
                {
                    images.map((item, index) =>
                        <Box className={styles.card} key={index}>
                            <Box>
                                <img className={styles.to_img} src={item} alt="" />
                            </Box>
                            <Box sx={{ my: 4 }}>
                                <Text text={'Andry Ford'} variant={'subtitle2'} />
                                <Text text={'CEO at Whatever'} variant={'body1'} />
                            </Box>
                        </Box>
                    )
                }
            </Box>
        </Box>
    )
}
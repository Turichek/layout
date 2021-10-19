import { Box } from '@mui/material';
import React from 'react';
import TextForInfo from '../textForInfo/TextForInfo';
import Text from '../typography/Text';
import styles from './infovar2.module.css';
import warning from '../images/warning.png';
import clock from '../images/clock.png';

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
        <Box className={styles.content}>
            <TextForInfo title={"Lorem ipsum dolor sit amet consectetur."}
                text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur cumque pariatur rem temporibus iste totam aperiam debitis modi, inventore blanditiis, voluptatibus laboriosam accusamus maxime?"} />
            <Box>
                <ul className={styles.flex_ul}>
                    {
                        data.map((item,index)=>
                            <li className={styles.li_container} key={index}>
                                <img src={item.image} alt=""/>
                                <Box>
                                    <Text size={36} text={item.title} variant={'h6'} />
                                    <Text size={24} text={item.text} variant={'body2'} />
                                </Box>
                            </li>
                        )
                    }
                </ul>
            </Box>
        </Box>
    )
}
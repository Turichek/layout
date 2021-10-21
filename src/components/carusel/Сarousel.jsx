import { Box, Link, Button} from "@mui/material";
import React from "react";
import Text from "../typography/Text";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CardPaper, CarouselGrid } from "../myStyledComponents";

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
            <CarouselGrid container wrap={'nowrap'}>
                {
                    data.map((item, index) =>
                        <CardPaper elevation={5} key={index}>
                            <Text text={"Name"} variant={'h4'} />
                            <Text text={item} variant={'body2'} />
                            <Link underline="hover" variant='body1'><Text sx={{ pt: 1 }} text={"Lorem ipsum dolor"} variant={"subtitle2"} col={"primary"} /></Link>
                        </CardPaper>
                    )
                }
            </CarouselGrid>
            <Box>
                <Button sx={{ mx: 0.2, minWidth: '52px', height: '52px', p: 0 }}><ArrowBackIcon  /></Button>
                <Button sx={{ mx: 0.2, minWidth: '52px', height: '52px', p: 0 }}><ArrowForwardIcon  /></Button>
            </Box>
        </>
    )
}
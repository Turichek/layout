import React from 'react';
import { MarginGrid144, ResponsivButton } from '../myStyledComponents';
import Text from '../typography/Text';

export default function Title() {
    return (
        <MarginGrid144 sx={{zIndex:'1000'}} container alignItems={'center'} justifyContent={'center'} textAlign={'center'} direction={'column'}>
            <Text text={"Lorem ipsum dolor"} variant={"overline"} col={'white'} />
            <Text text={"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"} variant={"h1"} col={'white'} />
            <ResponsivButton sx={{ maxWidth: "250px", mt: 4 }} color="error" variant='contained' size='large'>Get In Touch</ResponsivButton>
        </MarginGrid144>
    )
}
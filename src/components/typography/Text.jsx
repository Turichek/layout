import { createTheme, ThemeProvider, Typography } from '@mui/material';
import React from 'react';

const theme = createTheme();
theme.typography.h1 = {
    fontSize: '84px',
    fontFamily: 'Helvetica Neue',

    [theme.breakpoints.down('xl')]: {
        fontSize: '67.2px',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '52.5px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '39.4px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '27px',
    },
};
theme.typography.h2 = {
    fontSize: '64px',
    fontFamily: 'Helvetica Neue',

    [theme.breakpoints.down('xl')]: {
        fontSize: '51.2px',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '40px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '30px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
    },
};
theme.typography.h3 = {
    fontSize: '52px',
    fontFamily: 'Helvetica Neue',

    [theme.breakpoints.down('xl')]: {
        fontSize: '41.6px',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '32.5px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '24.4px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '16.2px',
    },
};
theme.typography.h4 = {
    fontSize: '44px',
    fontFamily: 'Helvetica Neue',

    [theme.breakpoints.down('xl')]: {
        fontSize: '35.2px',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '27.5px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '20.7px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '13.75px',
    },
};
theme.typography.subtitle1 = {
    fontSize: '30px',
    fontFamily: 'Helvetica',

    [theme.breakpoints.down('xl')]: {
        fontSize: '24px',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '18.7px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '9.3px',
    },
};
theme.typography.subtitle2 = {
    fontSize: '21px',
    fontFamily: 'Helvetica',

    [theme.breakpoints.down('xl')]: {
        fontSize: '16.8px',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '13.1px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '9.9px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '6.5px',
    },
};
theme.typography.body1 = {
    fontSize: '28px',
    fontFamily: 'Helvetica',

    [theme.breakpoints.down('xl')]: {
        fontSize: '22.4px',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '17.5px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '13px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '8.75px',
    },
};
theme.typography.overline = {
    fontSize: '26px',
    textTransform: 'uppercase',

    [theme.breakpoints.down('xl')]: {
        fontSize: '20.8px',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '16.25px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '12.2px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '8.1px',
    },
};
theme.typography.body2 = {
    fontSize: '24px',
    fontFamily: 'Helvetica',

    [theme.breakpoints.down('xl')]: {
        fontSize: '19.2px',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '15px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '11.3px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '7.5px',
    },
};
theme.typography.caption = {
    fontSize: '18px',
    fontFamily: 'Helvetica',

    [theme.breakpoints.down('xl')]: {
        fontSize: '14.4px',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '11.25px',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '8.4px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '5.6px',
    },
};

export default function Text({ text, variant, col }) {
    return (
        <ThemeProvider theme={theme}>
            <Typography sx={{
                fontStyle: 'normal',
                color:
                    col === "white" ? 'white' :
                        col === "primary" ? '#1976d2' :
                            col === "gray" ? '#D1DCE5' : 'black'
            }} variant={variant}>{text}</Typography>
        </ThemeProvider>
    )
}
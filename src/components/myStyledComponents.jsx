import { styled } from '@mui/system';
import { Box, Button, Grid, List, Paper } from '@mui/material';

export const MyBox = styled(Box)(`
    margin: 32px 0;

    @media (max-width: 1535.95px){
        margin: 26px 0;
    }
    @media (max-width: 1199.95px){
        margin: 20px 0;
    }
    @media (max-width: 899.95px){
        margin: 14px 0;
    }
    @media (max-width: 599.95px){
        margin: 8px 0;
    }
`)

export const Menu = styled(List)(`
    @media (max-width: 699.95px){
        display: none;
    }
`)

export const BurgerMenu = styled(List)(`
    display: none;
    @media (max-width: 699.95px){
        display: block;
    }
`)

export const CardPaper = styled(Paper)(`
    min-width: 350px;
    max-width: 350px;
    height: 330px;
    margin: 0 12px;
    padding: 48px;

    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    z-index: 1;

    @media (max-width: 1535.95px){
        min-width: 300px;
        max-width: 300px;
        height: 280px;
        margin: 0 10px;
        padding: 40px;
    }
    @media (max-width: 1199.95px){
        min-width: 250px;
        max-width: 250px;
        height: 230px;
        margin: 0 8px;
        padding: 32px;
    }
    @media (max-width: 899.95px){
        min-width: 200px;
        max-width: 200px;
        height: 180px;
        margin: 0 4px;
        padding: 24px;
    }
    @media (max-width: 599.95px){
        min-width: 150px;
        max-width: 150px;
        height: 130px;
        margin: 0 2px;
        padding: 16px;
    }
`)

export const CardPaper2 = styled(Paper)(`
    min-width: 340px;
    max-width: 340px;
    min-height: 100%;
    margin: 12px 12px;
    padding: 36px 36px 18px 36px;

    display: flex;
    flex-direction: column;
    justify-content: space-between; 

    @media (max-width: 1535.95px){
        min-width: 290px;
        max-width: 290px;
        height: 280px;
        margin:10px 10px;
        padding: 32px 32px 16px 32px;
    }
    @media (max-width: 1199.95px){
        min-width: 240px;
        max-width: 240px;
        height: 230px;
        margin: 8px 8px;
        padding: 28px 28px 14px 28px;
    }
    @media (max-width: 899.95px){
        min-width: 190px;
        max-width: 190px;
        height: 180px;
        margin: 4px 4px;
        padding: 24px 24px 12px 24px;
    }
    @media (max-width: 599.95px){
        min-width: 130px;
        max-width: 130px;
        height: 130px;
        margin: 2px 2px;
        padding: 20px 20px 10px 20px;
    }
`)

export const ResponsivButton = styled(Button)(`
    max-width: 250px;
    min-width: 250px;
    font-size: 15px;

    @media (max-width: 1535.95px){
        max-width: 210px;
        min-width: 185px;
        font-size: 12px;
    }
    @media (max-width: 1199.95px){
        max-width: 170px;
        min-width: 145px;
        font-size: 10px;
    }
    @media (max-width: 899.95px){
        max-width: 130px;
        min-width: 105px;
        font-size: 8px;
    }
    @media (max-width: 599.95px){
        max-width: 90px;
        min-width: 85px;
        font-size: 6px;
    }
`)

export const ResponsivButton2 = styled(Button)(`
    max-width: 450px;
    min-width: 450px;
    min-height: 100%;
    color: white;

    @media (max-width: 1535.95px){
        max-width: 380px;
        min-width: 380px;
    }
    @media (max-width: 1199.95px){
        max-width: 210px;
        min-width: 210px;
    }
    @media (max-width: 899.95px){
        max-width: 140px;
        min-width: 140px;
    }
    @media (max-width: 599.95px){
        max-width: 70px;
        min-width: 70px;
    }
`)

export const MarginGrid144 = styled(Grid)(`
    margin: 144px 0;

    @media (max-width: 1535.95px){
        margin: 120px 0;
    }
    @media (max-width: 1199.95px){
        margin: 96px 0;
    }
    @media (max-width: 899.95px){
        margin: 72px 0;
    }
    @media (max-width: 599.95px){
        margin: 48px 0;
    }
`)

export const CTAGrid = styled(Grid)(`
    margin: 114px 16px;

    @media (max-width: 1535.95px){
        margin: 96px 14px;
    }
    @media (max-width: 1199.95px){
        margin: 70px 12px;
    }
    @media (max-width: 899.95px){
        margin: 52px 10px;
    }
    @media (max-width: 599.95px){
        margin: 30px 8px;
    }
`)

export const MarginGrid280 = styled(Grid)(`
    margin: 280px 0;

    @media (max-width: 1535.95px){
        margin: 240px 0;
    }
    @media (max-width: 1199.95px){
        margin: 200px 0;
    }
    @media (max-width: 899.95px){
        margin: 160px 0;
    }
    @media (max-width: 599.95px){
        margin: 120px 0;
    }
`)

export const CarouselGrid = styled(Grid)(`
    margin-top: -100px;

    @media (max-width: 1535.95px){
        margin-top: -90px;
    }
    @media (max-width: 1199.95px){
        margin-top: -80px;
    }
    @media (max-width: 899.95px){
        margin-top: -70px;
    }
    @media (max-width: 599.95px){
        margin-top: -60px;
    }
`)

export const Img = styled('img')(`
    border-radius: 25px;
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 1535.95px){
        border-radius: 20px;
    }
    @media (max-width: 1199.95px){
        border-radius: 15px;
    }
    @media (max-width: 899.95px){
        border-radius: 10px;
    }
    @media (max-width: 599.95px){
        border-radius: 5px;
    }
`)

export const Img2 = styled('img')(`
    max-width: 100%;
    max-height: 100%;
`)

export const MyStyledContainer = styled(Box)(`
    margin: 0 250px;
    @media (max-width: 1535.95px){
        margin: 0 169px;
    }
    @media (max-width: 1199.95px){
        margin: 0 108px;
    }
    @media (max-width: 899.95px){
        margin: 0 63px;
    }
    @media (max-width: 599.95px){
        margin: 0 30px;
    }
`)
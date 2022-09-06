import React, { useState } from 'react';
import styled from 'styled-components';
import "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from '../features/car/carSlice';
import "react-redux"
import { useSelector } from 'react-redux';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState();
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a>
                <img src="/imagess/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) =>
                    <a key={index} href="#">{car}</a>
                )}
                {/* <a href="#"> Model Y</a>
                <a href="#"> Model X</a>
                <a href="#"> Model 3</a> */}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWraper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWraper>
                {cars && cars.map((car, index) =>
                    <li key={index}><a href="#">{car}</a></li>
                )}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a> </li>
                <li><a href="#">Trade-in</a> </li>
                <li><a href="#">Cybertruck</a> </li>
                <li><a href="#">Roadaster</a> </li>

            </BurgerNav>

        </Container>
    )
}

export default Header;

const Container = styled.div`
min-height:60px;
position: fixed;
display:flex;
align-items:center;
justify-content: space-between;
padding:0 20px;
top:0;
left:0;
right:0; // expand the header full width.
z-index:1;
`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;


a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
}

@media(max-width: 768px){
    display:none;
}
`

const RightMenu = styled.div`
display:flex;
align-items:center;
a{
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 10px;
    
}
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background: white;
width:300px;
z-index: 16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
transition: transform 0.2s;
text-align: start;


li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
}

a{
    font-weight:600;
}
`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const CloseWraper = styled.div`
display:flex;
justify-content: flex-end;

`
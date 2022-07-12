import React from 'react'
import styled from "styled-components";
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa';
import {GiChopsticks, GiNoodles} from 'react-icons/gi';
import {BiDish} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';
import {List} from './Styles'

const cuisines=[
    {
        icon:<BiDish/>,
        text:"Indian",
        link:"/indian"
    },
    {
        icon:<FaPizzaSlice/>,
        text:"Italian",
        link:"/italian"
    },
    {
        icon:<FaHamburger/>,
        text:"American",
        link:"/american"
    },
    {
        icon:<GiNoodles/>,
        text:"Chinese",
        link:"/chinese"
    },
]
  


const Category = () => {
  return (
    <List>
       {
        cuisines.map((cuisine)=>(
            <SLink key={cuisine.text} to={`/cuisine${cuisine.link}`}>
                {cuisine.icon}
                <h5>{cuisine.text}</h5>
            </SLink>
        ))
       }
    </List>
  )
}
const SLink=styled(NavLink) `
width:100px;
height:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
background:linear-gradient(35deg,#494949,#313131);
color:white;
cursor:pointer;

transform:scale(0.8);
transition:0.5s all linear;
text-decoration:none;
&:hover{
    transform:scale(0.9);
    background:linear-gradient(35deg,#494949,#313131);

}

h5{
    text-decoration:none;
    font-size:0.8rem;
}
svg{
    margin-bottom:0.4rem;
    font-size:1.5rem;
}
&.active{
background:linear-gradient(to right,#f27121,#e94057);

svg{
    color:white;
}
}

`

export default Category
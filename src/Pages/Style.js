import styled from "styled-components";
import { NavLink,Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill,BsFillBookmarkHeartFill } from "react-icons/bs";

const Grid=styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
grid-gap:3rem;
`
const Card=styled.div`
img{
    width:100%;
    border-radius:2rem;
}
a{
    text-decoration:none;
}
h4{
    text-align:center;
    padding:1rem;
}

`
const CLink=styled(NavLink)`
color:#313131;
`

const DetailsWrapper=styled.div`
margin-top:6rem;
margin-bottom:5rem;
display:flex;

.active{
    background:linear-gradient(35deg,#494949,#313131);
    color:white;
}

h2{
    margin-bottom:2rem;
}
li{
    font-size:1rem;
    line-height:2rem;
}
ul{
    margin-top:2rem;
}
img{
    width:100%;
}
`
const Button=styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid #313131;
font-weight:600;
margin-right:2rem;
`
const Col1=styled.div`
width:40%;
`

const Info=styled.div`
margin-left:8rem;
width:60%;
`

const Logo=styled(Link) `
font-size:1.2rem;
font-family:Lobster,cursive;
font-weight:bold;
text-decoration:none;
color:#313131;

`
const Nav=styled.div`
padding:2rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;

svg{
    font-size:2rem;
}

`
const Box=styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`
const Back=styled(BsFillArrowLeftCircleFill)`
width: 3rem;
height: 3rem;
cursor: pointer;
position:fixed;
color:#313131;
left:1%;
bottom:5%;
transform: scale(0.8);
transition: 0.5s all linear;
&:hover {
  transform: scale(0.9);
}

}
`
const SaveIcon=styled(BsFillBookmarkHeartFill)`
width: 3rem;
height: 3rem;
cursor: pointer;
color:#313131;
transform: scale(0.8);
transition: 0.5s all linear;
&:hover {
  transform: scale(0.9);
}

}
`

export {Card,Grid,Info,Button,DetailsWrapper,Col1,CLink,Nav,Logo,Box,Back,SaveIcon};
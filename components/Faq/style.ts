import styled from "styled-components";
import { breakpoint } from "@/utils/breakpoint";

export const Text = styled.p`
    color: rgb(56, 45, 112);
    font-family: Mulish;
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    text-align: center;
    line-height: 40px;
    letter-spacing: 0.374px;
    @media screen  and (max-width:${breakpoint.md}) {
        font-size:22px
    }

`
export const Box = styled.div`

`
export const Header = styled.p`
color: rgb(2, 24, 48);
    font-family: Mulish;
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    text-align: center;
    line-height: 40px;
    letter-spacing: 0.374px;
    margin: auto;
    width: 40%;
     @media screen  and (max-width:${breakpoint.md}) {
        font-size: 37px;
        width: 100%;
    }
`


export const AccordionButton = styled.button`
    background: transparent;
    outline: none;
    font-family: Mulish;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    width: 100%;
    border:0;
    text-align: start;
    height:80px;
    
`
export const AccordionItems = styled.div`
border-bottom: 0.4px solid #3A3A53;
width: 80%;
margin:auto;
`
export const AccordionText= styled.p`
    font-family: Mulish;
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    color:#fff;
    letter-spacing: 0.374px;
    @media screen  and (max-width:${breakpoint.md}) {
        font-size:22px
    }
`
export const AccordionSection = styled.div`
background: #1E1E2E;
margin-top:40px;
padding:20px;
height:350px;
margin-bottom:20px
`
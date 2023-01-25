import styled from "styled-components";
import { breakpoint } from '@/utils/breakpoint'
export const Box = styled.div`
`


export const EmailContainer = styled.div`
    border: 1px solid #fff;
    padding: 10px;
    width: 90%;
     @media (max-width: ${breakpoint.md}){
        padding-left: 0px;
        margin: auto;
        padding:10px;
    }
`

export const EmailText = styled.p`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    color:#fff;
    line-height: 25px;
    /* identical to box height */
    letter-spacing: 0.374px;
`
export const InputContainer = styled.div`
    display:flex;
    width:100%;
    gap:10px;
      @media (max-width: ${breakpoint.md}){
       flex-direction: column;
    }
`
export const InputEmail = styled.input`
    height: 36px;
    width: 60%;
    border-radius: 2px;
    outline:none;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    padding-left: 10px;
    font-family: 'Mulish';
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    @media (max-width: ${breakpoint.md}){
      width: 80%;
    }
`

export const InputButton = styled.button`
    height: 42px;
    border-radius: 4px;
    outline:none;
    color:#fff;
    background: #382D70;
    border-radius: 2px;
    border:0;
    width:40%;
    font-family: 'Mulish';
    font-style: normal;
`

export const FooterContainer =styled.div`
background: #1E1E2E;
margin-top:40px;
padding:20px;
align-items:center;
display:grid;
grid-template-columns:1fr 1fr;
 @media (max-width: ${breakpoint.md}){
      grid-template-columns:1fr;
      gap:30px;
    }
`
export const FooterHeader = styled.p`
font-family: 'Mulish';
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    color:#fff;
    line-height: 25px;
    /* identical to box height */
    letter-spacing: 0.374px;

`
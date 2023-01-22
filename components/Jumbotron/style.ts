import styled from 'styled-components'
import { breakpoint } from '@/utils/breakpoint'

export const JumbotronContainer = styled.div`
    background:linear-gradient(to right,#130F25E8,#130F25),url(./jumbotron.png);
    background-repeat: no-repeat;
    transform: matrix(1, 0, 0, 1, 0, 0);
    display:grid;
    
    grid-template-columns: repeat(2,1fr);
   @media (max-width: ${breakpoint.md}){
         grid-template-columns: repeat(1,1fr);
         gap:10px;
         height:100%
    }
`
export const JumbotronTextContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items:flex-start;
    padding-left: 58px;
    flex-direction: column;
      @media (max-width: ${breakpoint.md}){
        padding-left: 0px;
        width: 80vw;
        padding:10px
    }
`
export const JumbotronText = styled.p`
    padding:0;
    color:#fff;
    font-family: 'Mulish';
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
`
export const JumbotronTextHeader = styled.h1`
font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 42px;
line-height: 50px;
letter-spacing: 0.374px;
color:#ffff;
padding:0;
`

export const EmailContainer = styled.div`
    border: 1px solid #fff;
    padding: 10px;
    width: 100%;
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

export const JumboImgContainer = styled.div`
width:100%;
display: flex;
     @media (max-width: ${breakpoint.md}){
          
    }
`
export const ImageTwo = styled.img`
      align-self: flex-end;
    justify-content: center;
    width: 100%;
`
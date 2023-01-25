import styled from 'styled-components'
import { breakpoint } from '@/utils/breakpoint'

export const CardContainer = styled.div`
    width:400px;
   @media screen  and (max-width:${breakpoint.md}) {
       width:440px
    }
    background: #272532;
     background:linear-gradient(to right,#130F25E8,#130F25),url(.\cardbg.png);
    background-repeat: no-repeat;
`
export const CardImg = styled.img`
    background: #fff;
    width: 30px;
    padding: 20px;
    border-radius: 13px;
`
export const CardHeader = styled.p`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 43px;
    color:#fff;
    letter-spacing: 0.374px;

`
export const CardBody = styled.p`
  font-family: 'Mulish';
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    color:#fff;
    letter-spacing: 0.374px;
`

export const CardCover = styled.div`
 
    gap:20px;
    padding:40px;
   align-items: center;
   justify-content: center;
     display: grid;
 grid-template-columns: repeat(3, 400px);

  @media (min-width: ${breakpoint.lg}) {
    grid-template-columns: repeat(3, 400px);
  }

  @media (min-width: ${breakpoint.md}) and (max-width: ${breakpoint.lg}) {
    display:flex;
    flex-wrap: wrap;
  }

  @media (min-width: ${breakpoint.sm}) and (max-width: ${breakpoint.md}) {
     display:flex;
    flex-wrap: wrap;
  }
    
`
import styled from 'styled-components'
import { breakpoint } from '@/utils/breakpoint'

export const Text = styled.p`
    color: rgb(56, 45, 112);
    font-family: Mulish;
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    text-align: center;
    line-height: 40px;
    letter-spacing: 0.374px;
    @media screen  and (max-width:${breakpoint.sm}) {
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
    @media screen  and (max-width:${breakpoint.sm}) {
        font-size: 37px;
        width: 100%;
    }
`
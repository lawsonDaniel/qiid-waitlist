import styled from 'styled-components'
import { colors } from '@/utils/colors'

export const Header = styled.header`
display:flex;
align-items:center;
justify-content:space-between;
padding:10px;
padding-left: 20px;
padding-right:20px;
height: 10vh;
`
export const Logo = styled.img`
width: 53.77px;
height: 36.98px;
`
export const HeaderText = styled.a`
    color:${colors.Default};
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.374px;
    text-decoration:none;
`
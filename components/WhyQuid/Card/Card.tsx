/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Box } from '../styles'
import { CardBody, CardContainer, CardHeader, CardImg } from './styles'


export default function Card() {
  return (
    <CardContainer>
        <img style={{
            position:'absolute'
        }} src=".\cardbg.png"/>
        <Box style={{
            padding:'20px'
        }}>
        <CardImg src="./search.png" />
        <CardHeader><span style={{
            color:'#FBB03B'
        }}>Wide Results</span> for all products</CardHeader>
        <CardBody>Thousands of products available to you at a click</CardBody>
        </Box>
    </CardContainer>
  )
}

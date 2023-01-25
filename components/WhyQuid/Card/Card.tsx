/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Box } from '../styles'
import { CardBody, CardContainer, CardHeader, CardImg } from './styles'


export default function Card({image,firsttext,secondtext,thirdtext}:any) {
  return (
    <CardContainer>
        <img style={{
            position:'absolute'
        }} src=".\cardbg.png"/>
        <Box style={{
            padding:'20px'
        }}>
    <CardImg src={image} />
        <CardHeader><span style={{
            color:'#FBB03B'
        }}>{firsttext}</span> {secondtext}</CardHeader>
        <CardBody>{thirdtext}</CardBody>
        </Box>
    </CardContainer>
  )
}

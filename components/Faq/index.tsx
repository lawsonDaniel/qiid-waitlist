import React from 'react'
import { Header,Text,Box } from './style'
import Accordion from './Accordion'

export default function index() {
  return (
    <Box>
        <Text>
            FAQS
        </Text>
        <Header>
         Detailed Answers for every Questions for you
        </Header>
        <Accordion />
    </Box>
  )
}

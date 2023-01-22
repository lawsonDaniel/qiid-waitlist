import React from 'react'
import { Header,Logo, HeaderText} from './style'

export default function index() {
  return (
    <Header>
        <Logo src="./logo.png" />
        <HeaderText href="/">FAQ</HeaderText>
    </Header>
  )
}

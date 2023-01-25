import React from 'react'
import Card from './Card'
import {CardData} from './data'
import { CardCover } from './styles'

export default function index() {
  return (
    <CardCover>
        <Card image="./search.png" firsttext="Wide Results"  secondtext="for all products" thirdtext="Thousands of products available to you at a click" />
        <Card image="./card.png" firsttext="Wide Results"  secondtext="for all products" thirdtext="Millions of buyers globally ready to buy your products"/>
        <Card image="./star.png" firsttext="Top Rated Sellers"  secondtext="for you" thirdtext="Millions of buyers globally ready to buy your products"/>
        <Card image="./wallet.png" firsttext="Wallet System"  secondtext="for your withdrawals" thirdtext="Thousands of products available to you at a click"/>
        <Card image="./safe.png" firsttext="Secured Payment"  secondtext=" for your purchases" thirdtext="Millions of buyers globally ready to buy your products"/>
       <Card image="./star.png" firsttext="Top Rated Sellers"  secondtext="for you" thirdtext="Millions of buyers globally ready to buy your products"/>
    </CardCover>
  )
}

import React from 'react'
import { colors } from '@/utils/colors'

import { JumbotronContainer,JumbotronText,JumbotronTextContainer,JumbotronTextHeader,EmailContainer,EmailText,InputContainer,InputEmail,InputButton,JumboImgContainer, ImageTwo } from './style'

export default function index() {
  return (
    <JumbotronContainer>
                <JumbotronTextContainer>
                        <JumbotronTextHeader>Marketplace for every <span style={{
                            color:`${colors.Secondary}`
                        }}>Buyers and Sellers</span></JumbotronTextHeader>
                        <JumbotronText>
                            Buying and selling made Faster, Cheaper and Safer
                        </JumbotronText>
                        <EmailContainer>
                            <EmailText>
                                    Be the first to get early access when we launch
                            </EmailText>
                            <InputContainer>
                                    <InputEmail placeholder='Email Address'/>
                                    <InputButton>Join our waitlist </InputButton>
                            </InputContainer>
                        </EmailContainer>
                </JumbotronTextContainer>
                <JumboImgContainer>
                          <ImageTwo src="./jumblg.png" />
                </JumboImgContainer>
    </JumbotronContainer>
  )
}

import React from 'react'
import {Box,EmailContainer,EmailText,InputContainer,InputEmail,InputButton,FooterContainer,FooterHeader} from './styles'
export default function index() {
  return (
    <FooterContainer>
        <Box>
            <FooterHeader>Connect with us on social:</FooterHeader>
            <div style={{
                display:'flex',
                gap:'20px'
            }}>
                <img src="./fb.png" />
                <img src="./tw.png" />
                <img src="./ig.png" />
                <img src="./ld.png" />
            </div>
        </Box>
         <EmailContainer>
                            <EmailText>
                                    Be the first to get early access when we launch
                            </EmailText>
                            <InputContainer>
                                    <InputEmail placeholder='Email Address'/>
                                    <InputButton>Join our waitlist </InputButton>
                            </InputContainer>
                        </EmailContainer>
    </FooterContainer>

  )
}

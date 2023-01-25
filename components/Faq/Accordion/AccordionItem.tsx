/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import { AccordionButton,AccordionItems, AccordionText } from '../style';

export default function AccordionItem({ title, content, index }:any) {
    const [openIndex, setOpenIndex] = useState(null);
     const isOpen = index === openIndex;
  return (
     <AccordionItems>
        <div onClick={() => setOpenIndex(isOpen ? null : index)} style={{
                display: 'flex',
                 alignItems: 'center'
        }}>
        <AccordionButton style={{
            color:`${isOpen ?'#F9B245' :'#fff'}`
        }} >
        {title}
      </AccordionButton>
    <img src={isOpen ? './down.png' : './up.png'} />
        </div>
      
      {isOpen &&
       <AccordionText>{content}</AccordionText>}
    </AccordionItems>
  )
}

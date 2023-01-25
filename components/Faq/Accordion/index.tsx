import React from 'react'
import { AccordionSection } from '../style';
import AccordionItem from './AccordionItem'
export default function index() {

    const data = [
  { title: 'Who is QIID', content: 'Content for accordion item 1' },
  { title: 'How can i get started?', content: 'Content for accordion item 2' },
  { title: 'Accordion Item 3', content: 'Content for accordion item 3' },
];
  return (
     <AccordionSection>
      {data.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
          index={index}
        />
      ))}
    </AccordionSection>
  )
}

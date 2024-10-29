import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";

const BerandaAccordion = () => {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div className={'max-w-screen-xl mx-auto p-4'}>
            <div className='flex justify-center'>
                <h2 className='text-3xl mb-4 font-semibold'>FAQ</h2>
            </div>
            <Accordion variant="shadow">
                <AccordionItem key="1" aria-label="Accordion 1" title="Apa itu Sociesmedia">
                    ini konten pertama
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Tujuan Sociesmedia itu apa?">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                    {defaultContent}
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default BerandaAccordion;

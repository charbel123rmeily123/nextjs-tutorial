
'use client';
import Link from 'next/link';

import { AccordionList, Accordion, SubAccordion } from './accordionData';
import '../style.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export default function AccordionsList() {

  const [openAccordion, setOpenAccordion] = useState('');
  const [opensubAccordion, setOpensubAccordion] = useState('');

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const accordionId = pathParts[2];
    const subAccordionId = pathParts[3];
    
    if (accordionId) {
      setOpenAccordion(accordionId);
    }
    
    if (subAccordionId) {
      setOpensubAccordion(subAccordionId);
    }
  }, []);

  const handleAccordionClick = (id: string) => {
    setOpenAccordion((prevState) => (prevState === id ? '' : id));
    if (opensubAccordion !== '' && openAccordion !== id) {
      setOpensubAccordion('');
    } else if (openAccordion === id) {
      setOpensubAccordion('');
    }
    
    
  };

  const handleSubAccordionClick = (id: string) => {
    setOpensubAccordion((prevState) => (prevState === id ? '' : id));
   
    
  };
  return (
    <div className="accordion-container">
      {AccordionList.map((accordion: Accordion) => (
        <div className="accordion" key={accordion.id}>
          <Link
            href={`/accordions/${accordion.id}`}
            as={`/accordions/${accordion.id}`}
            className="accordion-link"
          >
            <div
              className="accordion-header"
              onClick={() => handleAccordionClick(String(accordion.id))}
            >
              <div className="accordion-title">
                {accordion.title}
                <span
                  className={`icon ${
                    openAccordion === accordion.id.toString() ? "rotate" : ""
                  }`}
                >
                  {openAccordion === accordion.id.toString() ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </span>
              </div>
            </div>
          </Link>
          <div className="accordion-content-container">
          {accordion.subAccordions?.map((subAccordion: SubAccordion) => (
    <div key={subAccordion.id} className={`accordion ${openAccordion === accordion.id.toString() ? "open" : ""}`}>
        {openAccordion === accordion.id.toString() &&
            <Link
                href={`/accordions/${accordion.id}/${subAccordion.id}`}
                as={`/accordions/${accordion.id}/${subAccordion.id}`}
                className="accordion-link"
            >
                <div
                    className="accordion-header"
                    onClick={() =>
                        handleSubAccordionClick(String(subAccordion.id))
                    }
                >
                    <div className="accordion-title">
                        {subAccordion.title}
                        <span
                            className={`icon ${
                                opensubAccordion === subAccordion.id.toString()
                                    ? "rotate"
                                    : ""
                            }`}
                        >
                            {opensubAccordion === subAccordion.id.toString() ? (
                                <AiOutlineMinus />
                            ) : (
                                <AiOutlinePlus />
                            )}
                        </span>
                    </div>
                </div>
            </Link>
        }
        {opensubAccordion === subAccordion.id.toString() && 
            <div className="accordion-content">
                {subAccordion.content}
            </div>
        }
    </div>
))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

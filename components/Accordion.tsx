import { useState } from "react";
import './style.css';
import {AiOutlineMinus , AiOutlinePlus} from "react-icons/ai";






interface AccordionData {
  title: string;
  content: string;
  subAccordions?: AccordionData[];
}

interface AccordionProps {
  data: AccordionData;
  isOpen: boolean;
  onClick: () => void;
}

const Accordion = ({ data, isOpen, onClick }: AccordionProps) => {
  const toggleAccordion = () => {
    if (isOpen) {
      // if current accordion is open, close it and any open sub-accordions
      setOpenAccordionsubIndex(null);
      onClick();
    } else if (openAccordionsubIndex !== null) {
      // if a sub-accordion is open, close it and open the current accordion
      setOpenAccordionsubIndex(null);
      onClick();
      setOpenAccordionsubIndex(0);
    } else {
      // if no sub-accordion is open, open the current accordion
      onClick();
      setOpenAccordionsubIndex(0);
    }
  };


  const [openAccordionsubIndex, setOpenAccordionsubIndex] = useState<number | null>(
    null
  );



  const handleAccordionClick = (subIndex: number) => {
    if (openAccordionsubIndex === subIndex) {
      setOpenAccordionsubIndex(null);
    } else {
      setOpenAccordionsubIndex(subIndex);
    }
  };

  
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{data.title}</h2>
        <span className={`icon ${isOpen ? "rotate" : ""}`}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </div>

      {isOpen && (
        <div className="accordion-content">
          <p>{data.content}</p>
          {data.subAccordions && (
            <div>
              {data.subAccordions.map((subData, subIndex) => (
                <Accordion
                  key={subIndex}
                  data={subData}
                  isOpen={openAccordionsubIndex === subIndex}
                  onClick={() => handleAccordionClick(subIndex)} // toggle parent accordion on sub-accordion click
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
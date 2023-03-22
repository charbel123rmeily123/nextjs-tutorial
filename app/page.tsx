'use client';

import Accordion from "../components/Accordion";
import { useState } from "react";
import Link from "next/link";


interface AccordionData {
  title: string;
  content: string;
  subAccordions?: AccordionData[];
}

function Home(): JSX.Element {
  const accordionData: AccordionData[] = [
    {
      title: "Accordion Title 1",
      content: "Accordion Content 1",
      subAccordions: [
        {
          title: "Nested Accordion Title 1",
          content: "Nested Accordion Content 1",
        },
        {
          title: "Nested Accordion Title 2",
          content: "Nested Accordion Content 2",
        },
      ],
    },
    {
      title: "Accordion Title 2",
      content: "Accordion Content 2",
    },
    {
      title: "Accordion Title 3",
      content: "Accordion Content 3",
    },
  ];

  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  const handleButtonClick = (index: number) => {
    handleAccordionClick(index);
    const element = document.getElementById(`accordion-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (



    <div className="accordion-container">
  <div className="accordion-buttons">
    {accordionData.map((data, index) => (
      <button key={index} onClick={() => handleButtonClick(index)}>
        {data.title}
      </button>
    ))}
  </div>

  {accordionData.map((data, index) => (
    <div key={index} className="accordion">
      <Accordion
        id={`accordion-${index}`}
        data={data}
        isOpen={openAccordionIndex === index}
        onClick={() => handleAccordionClick(index)}
      />
    </div>
  ))}
</div>
  );
}

export default Home;








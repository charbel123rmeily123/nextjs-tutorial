'use client';
import { useState } from "react";
import Accordion from "../components/Accordion";

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
      subAccordions: [
        {
          title: "Nested Accordion Title 2",
          content: "Nested Accordion Content 2",
        },
        {
          title: "Nested Accordion Title 2",
          content: "Nested Accordion Content 2",
        },
      ],
    },
    {
      title: "Accordion Title 3",
      content: "Accordion Content 3",
    },
  ];

  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const handleAccordionClick = (index: number) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
    
    // Update the URL
    window.history.pushState(null, "", `/accordion${index + 1}`);
  };

  return (
    <div className="accordion-container">
      {accordionData.map((data, index) => (
        <div key={index} className="accordion">
          <Accordion
            id={`accordion${index + 1}`}
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



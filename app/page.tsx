'use client';


import Accordion from "../components/Accordion";
import { useState } from "react";

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

  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const handleAccordionClick = (Index: number) => {
    if (openAccordionIndex === Index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(Index);
    }
  };


  return (
    <div>
      {accordionData.map((data, index) => (
        <Accordion
          key={index}
          data={data}
          isOpen={openAccordionIndex === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
}

export default Home;
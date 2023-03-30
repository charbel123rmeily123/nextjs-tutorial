export type SubAccordion = {
  id: number;
  title: string;
  content: string;
};

export type Accordion = {
  id: number;
  title: string;
  content: string;
  subAccordions?: SubAccordion[];
};

export const AccordionList: Accordion[] = [
  {
    id: 1,
    title: "Accordion 1",
    content: "hello1",
    subAccordions: [
      { id: 11, title: "Subaccordion 1-1", content: "subhello1-1" },
      { id: 12, title: "Subaccordion 1-2", content: "subhello1-2" },
    ],
  },
  {
    id: 2,
    title: "Accordion 2",
    content: "hello2",
    subAccordions: [
      { id: 21, title: "Subaccordion 2-1", content: "subhello2-1" },
      { id: 22, title: "Subaccordion 2-2", content: "subhello2-2" },
    ],
  },
  {
    id: 3,
    title: "Accordion 3",
    content: "hello3",
    subAccordions: [
      { id: 31, title: "Subaccordion 3-1", content: "subhello3-1" },
      { id: 32, title: "Subaccordion 3-2", content: "subhello3-2" },
    ],
  },
  // Add more accordions here as needed
];
export type Accordion = {

  id: number;
  title: string;
  content:string;
  
  }; 
  export const AccordionList: Accordion[] = [
    { id: 1, title: "Accordion 1", content: "hello1" },
    { id: 2, title: "Accordion 2", content: "hello2" },
    { id: 3, title: "Accordion 3", content: "hello3" },
    // Add more accordions here as needed
  ];
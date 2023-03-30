

import Link from "next/link";
import { AccordionList, Accordion } from "./accordionData";

export default function AccordionsList() {
  return (
    <div>
      {AccordionList.map((accordion: Accordion) => (
        <div key={accordion.id}>
          <Link href={`/accordions/${accordion.id}`} as={`/accordions/${accordion.id}`}>
  
    Accordion: {accordion.id}
 
</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}
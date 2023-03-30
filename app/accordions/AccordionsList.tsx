

import Link from "next/link";
import { AccordionList, Accordion, SubAccordion } from "./accordionData";

export default function AccordionsList() {
  return (
    <div>
      {AccordionList.map((accordion: Accordion) => (
        <div key={accordion.id}>
          <Link href={`/accordions/${accordion.id}`} as={`/accordions/${accordion.id}`}>
            Accordion: {accordion.id}
          </Link>
          <ul>
            {accordion.subAccordions?.map((subAccordion: SubAccordion) => (
              <li key={subAccordion.id}>
                <Link
                  href={`/accordions/${accordion.id}/${subAccordion.id}`}
                  as={`/accordions/${accordion.id}/${subAccordion.id}`}
                >
                  Subaccordion: {subAccordion.id}
                </Link>
              </li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
}
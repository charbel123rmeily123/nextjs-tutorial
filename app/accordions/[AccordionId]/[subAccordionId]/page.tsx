import { AccordionList } from "../../accordionData";
import { notFound } from "next/navigation";
import { useState } from "react";

export const dynamicParams = true;

type PageProps = {
  params: {
    AccordionId: string;
    subAccordionId: string;
  };
};

const fetchSubAccordion = async (
  accordionId: string,
  subAccordionId: string
) => {
  const accordion = AccordionList.find(
    (a) => a.id.toString() === accordionId.toString()
  );

  if (!accordion) {
    return notFound();
  }

  const subAccordion = accordion.subAccordions?.find(
    (sa) => sa.id.toString() === subAccordionId.toString()
  );

  if (!subAccordion) {
    return notFound();
  }

  return subAccordion;
};

async function SubAccordionPage(props: PageProps) {
  console.log("props:", props);
  const { AccordionId, subAccordionId } = props.params;
  const subAccordion = await fetchSubAccordion(AccordionId, subAccordionId);

  if (!subAccordion) {
    return notFound();
  }

  return (
    <div>
     
    </div>
  );
}

export default SubAccordionPage;

// export async function generateStaticParams() {
//   const staticParams = AccordionList.map((accordion) => ({
//     params: { AccordionId: accordion.id.toString() },
//   }));
//   console.log("staticParams:", staticParams);
//   return staticParams;
// }
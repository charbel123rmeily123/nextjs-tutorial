import { AccordionList } from"../accordionData";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type PageProps = {
  params: { AccordionId: string };
};

const fetchAccordion = async (AccordionId: string) => {
  const accordion = AccordionList.find((a) => a.id.toString() === AccordionId);

  if (!accordion) {
    return notFound();
  }

  return accordion;
};

async function AccordionPage(props: PageProps) {
  console.log("props:", props);
  const { AccordionId } = props.params;
  const accordion = await fetchAccordion(AccordionId);

  if (!accordion) {
    return notFound();
  }

  return (
    <div>
      <h1>{accordion.title}</h1>
      <p>{accordion.content}</p>
    </div>
  );
}

export default AccordionPage;

// export async function generateStaticParams() {
//   const staticParams = AccordionList.map((accordion) => ({
//     params: { AccordionId: accordion.id.toString() },
//   }));
//   console.log("staticParams:", staticParams);
//   return staticParams;
// }
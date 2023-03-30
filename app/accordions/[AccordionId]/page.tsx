import { AccordionList } from "../accordionData";
import { notFound} from "next/navigation";

export const dynamicParams = true;

type PageProps = 
 
 {
    
    AccordionId: string;
  };


console.log("Accordion List:", AccordionList);



const  fetchAccordion = async(AccordionId: string)=> {
 
  const accordion = AccordionList.find(
    (a) => a.id === parseInt(AccordionId, 10)
  );
if (!accordion) {
    return notFound();
  }
  
  return accordion;
}



async function AccordionPage(props: PageProps) {
  

  const { AccordionId } = props;
  console.log("AccordionId:",AccordionId);
 const accordion = await fetchAccordion(AccordionId);


  if (!accordion) {
    return notFound();
  }
  console.log("accordion:", accordion);
  return (
    <div>
      <h1>{accordion.title}</h1>
      <p>{accordion.content}</p>
    </div>
  );

}

export default AccordionPage;



export async function generateStaticParams() {
  const staticParams = AccordionList.map((accordion) => ({
    params: { AccordionId: accordion.id.toString() },
    
  }));
  console.log("staticParams:", staticParams);
  return staticParams;
}
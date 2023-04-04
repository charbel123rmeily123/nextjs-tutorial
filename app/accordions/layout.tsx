

import AccordionsList from "./AccordionsList";


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      
        <main >

       
            <div>
        
           
          < AccordionsList/> 

          </div>


          <div  >
            {children}

          </div>

          

          </main>
    
    );
  }
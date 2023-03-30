

import AccordionsList from "./AccordionsList";


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      
        <main className="flex">

       
            <div>
        
           
          < AccordionsList/> 

          </div>


          <div className="flex-1" >
            {children}

          </div>

          

          </main>
    
    );
  }
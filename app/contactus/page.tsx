import React from "react"; 


const ContactUs = () => {
  
    return (
      <div >

      <div
        className="relative"
        style={{
          backgroundImage: "url(https://picsum.photos/200/300)",
          height: "250px",
          width: "100%",
          maxWidth: "100vw",
          display: "flex",          // Set display to flex
          justifyContent: "center", // Horizontally center the title
          alignItems: "center",     // Vertically center the title
          
        }}
      >
         <button
  className="absolute top-0 right-12 px-4 py-3 font-bold text-red-500 text-2xl bg-white rounded-bl-lg rounded-br-lg flex items-center"
  style={{ right: "280px" }}
>
  6388  <span className="ml-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  </span>

</button>

        <h1
          className="text-6xl font-bold text-white "
        >
          ..reach out anytime, anywhere!
        </h1>
      </div>

      <div className="ml-20">
        <button className=" bg-red-500 text-white px-6 py-4 ">Customer Service</button>
        <button className=" bg-gray-500 text-white px-6 py-4 ">Franchise </button>
      </div>


    <div className="mt-8 flex-col  flex items-center justify-center">
        <div>
            <h2 className="text-xl font-bold text-gray-600 ">CONTACT US</h2>
        </div>

         <div>
            <h3 className=" mt-5 text-6xl font-bold text-gray-600 ">CUSTOMER SERVICE</h3>
            </div>


         <div className=" mt-4 bottom-0 left-0 w-12 h-2 bg-red-500" style={{ transform: "translateY(100%)" }} >


         </div>

        
    </div>
    
    <div className="mt-12 flex">
    <div className="flex-1  flex-col flex  mt-20 items-center ml-10   ">
    <div className="text-3xl  text-gray-600 text-center ">Our customer service team are <h4 className="text-3xl font-bold text-gray-600"> available 24/7.</h4> </div>
    <div className="text-gray-600 mt-2 text-center">We also provide specific reports 
    tailored for your operation 
     varying from monthly reports
     Trending analysis and proofing 
    & sanitation reports.</div>
  </div>

  <div className="flex-1 pr-20 mr-40 pl-2 rounded-tr-lg shadow-md relative">
  <h3 className="text-2xl font-bold text-red-500 pr-20 pl-20 pt-10">We got you! Leave us a <br/>message & our team will <br/> get back to you asap!</h3>
  <form className="mt-2 pr-40 pl-20 pb-5">
    <label className="block text-gray-600 font-bold mb-2 mt-4">Phone number:</label>
    <input type="text" className="border border-gray-400 py-2 px-4 w-full mb-2" />
    <label className="block text-gray-600 font-bold mb-2 mt-4">Email Address:</label>
    <input type="text" className="border border-gray-400 py-2 px-4 w-full mb-2" />
    <label className="block text-gray-600 font-bold mb-2 mt-4">Leave us a note:</label>
    <textarea className="border border-gray-400 py-10 px-4 w-full mb-2"></textarea>
  </form>
  <div className="absolute bottom-0  pr-40 pl-20">
    <button type="submit" className="bg-red-500 text-white py-2 px-20 rounded-md">Send</button>
  </div>
</div>
  
</div>
<div>

  erkjhvker
 
</div>

 </div>
      )
    }

export default ContactUs;

import React, { Suspense } from "react"; 
import TodosList from "./todos/TodosList";
function Home(){

return(

    <div>
        <Suspense fallback={<p className=" text-red-500 ">  Loading the todos...</p>}>
            <h1> Loading the Todos</h1>
            <div className="flex space-x-2">
                {/* @ts-ignore*/}
                <TodosList/>


            </div>
</Suspense>

<Suspense fallback={<p className="text-blue-500">  Loading the Shopping Trolley...</p>}>
            <h1> Loading the Shopping Trolley</h1>
            <div className="flex space-x-2">
                {/* @ts-ignore*/}
                <TodosList/>


            </div>
            </Suspense>


    </div>
);

}
export default Home;
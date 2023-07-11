import { useState} from "react";
import {AvatarType} from "../models/Avatar"


type AvatarProps={
  cast:Avatar[]
}

const Avatar:FC<AvatarProps> =({cast}) => {


      
//{cast.map((c)=>{ 
     // <div>
    //  <img className="rounded-full h-12 w-12 object-cover" src={c.image?.medium}/>
     //   <h1>{c.name}</h1>
     // </div>
      //  })}
  
  const[toggle, setToggle]= useState(false);
  
 return(
    <div> 
  <div className="flex gap-1">
{ cast?.map((c,index)=> { if (index<3) return <img  className="rounded-full h-12 w-12" src={c.image?.medium}/>
                                
     if (index===3) return <div onClick = {()=> setToggle(!toggle)}
                              className="rounded-full h-12 w-12 border border-gray-700 flex items-center justify-center text-center">
       <button onClick = {()=> setToggle(!toggle)}>+{cast.length - 3}</button>
      </div>}
     )}
  </div>
      
      {toggle &&
  <div>
      <div className="bg-gray-200 rounded-md flex flex-col g-1 m-2">
        {cast.map((c)=> <div className="p-4 flex">  
        <img className="rounded-full h-12 w-12 object-cover object-center" src={c.image?.medium}/>
        <h1 className="p-2">{c.name}</h1>
        </div>)}
        
      </div>
    </div>
      }
    </div>
    
  )
}

export default Avatar;

import { useState , useEffect } from "react"

function useDebounce (query : string , delay : number)  {  
 const [debounceValue , setDebounceValue] = useState<string>(query); 
 // It recieves Value and Delay as Parameter
 useEffect(()=> {  
    const handler = setTimeout(()=> { 
     setDebounceValue(query);
    },delay) 
     return () => { 
        clearTimeout(handler);
     }; 
    },[query,delay]) 

    return debounceValue;
} 
export default useDebounce;
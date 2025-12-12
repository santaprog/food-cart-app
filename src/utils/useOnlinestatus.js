import { useEffect, useState } from "react";

const useOnlineStatus =()=>{
    const [onlineStatus,setOnlineStatus]= useState(true);

    useEffect(()=>{
        //we can call the addeventlistner
        window.addEventListener("online", (event) => { 
            setOnlineStatus(true)
        });
        window.addEventListener("offline", (event) => { 
            setOnlineStatus(false)
        });
    },[]);

    return onlineStatus;
}

export default useOnlineStatus;
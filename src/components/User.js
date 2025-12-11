import { useState } from "react";

const User =({name,location})=>{
    const [count,setCount] = useState(1);
    const [count1,setCount1] = useState(2);
    return (
        <div className="userCard">
            <div>Name : {name}</div>
            <div>Location : {location}</div>
            <div>Count : {count}</div>
            <div>Count1 : {count1}</div>
        </div>
    );
}

export default User;
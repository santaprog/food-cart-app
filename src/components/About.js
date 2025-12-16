import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent Construstor")
    }

    componentDidMount(){
        // console.log("Parent ComponentDidMount")
    }
    render(){
        // console.log("Parent Render")
        return (
            <div className="p-4 m-4">
                <div className="text-bold text-black text-2xl">About US Page</div>
                <UserClass name={"First"} location={"Kolhapur Class"}/>
                
            </div>
        );
    }
}

// const About =()=>{
//     return (
//                 <div>
//                     <h1>About US Page</h1>
//                     <UserClass name={"Prajakta Class"} location={"Kolhapur Class"}/>
//                 </div>
//             );
// }

export default About;
import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        // console.log("Profile Constructor");
    }
    componentDidMount(){
        // console.log("Profile ComponentDidMount");
    }
    render(){
        // console.log("Inside Profile Render");
        return(
            <div>Designation: {this.props.name}</div>
        );
    }
}


export default Profile;
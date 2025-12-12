import React from "react";
import Profile from "./Profile";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data:{}
    };
    // console.log(this.props.name + "Child Constructor")
  }
  async componentDidMount() {
    // console.log("Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/santaprog");
    const jsonData = await data.json();

    console.log(jsonData);
    this.setState({data:jsonData});

  }

  componentDidUpdate(){
    console.log("Inside Component Updated")
  }

  componentWillUnmount(){
    console.log("Unmount")
  }
  render() {
    // console.log("Child Render");
    // const { name, location } = this.props;
    const { name ,location,bio} = this.state.data;
    return (
      <div className="userCard">
        <div>Name : {name}</div>
        <div>Location : {location}</div>
        <div>Headline : {bio}</div>
        
        <Profile name={"Software Developer"}/>
      </div>
    );
  }
}

export default UserClass;

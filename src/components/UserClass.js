import React from "react";
import Profile from "./Profile";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 3,
    };
    // console.log(this.props.name + "Child Constructor")
  }
  componentDidMount() {
    // console.log("Child ComponentDidMount");
  }
  render() {
    // console.log("Child Render");
    const { name, location } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="userCard">
        <div>Name : {name}</div>
        <div>Location : {location}</div>
        <div>Count : {count}</div>
        {/* Never Update directly the state variable inside the class Component */}
        <div>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Incrementer
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              });
            }}
          >
            Decrementer
          </button>

        </div>
        <Profile name={"Software Developer"}/>
      </div>
    );
  }
}

export default UserClass;

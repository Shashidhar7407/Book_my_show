// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h4>{props.description}</h4>
//     </div>
//   );
// };
//props passes data from one component to another component
//state is nothing but the data that an individual component holds

// export default User;
import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: "earth",
    };
    console.log("hey i'm from constructor");
  }

  componentDidMount() {
    // console.log("hey i'm from componentDidMount");
    // to change the planet name

    this.setState({ planet: "jupiter" });
  }
  render() {
    console.log("hey i'm from render");
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
        <h4>{this.state.planet}</h4>
      </div>
    );
  }
}

export default User;

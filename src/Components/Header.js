import React from "react";

class Header extends React.Component {
  render() {
    return <h1>{this.props.header}<img src={this.props.image}/></h1>;
  }
}

export default Header;

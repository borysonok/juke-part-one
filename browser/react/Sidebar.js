import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    const reset = this.props.reset;
    return (
      <sidebar>
        <img src="juke.svg" className="logo" />
        <section>
          <h4 className="menu-item active">
            <a href="#" onClick={reset}>ALBUMS</a>
          </h4>
        </section>
      </sidebar>
    );
  }
}

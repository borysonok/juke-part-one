import React, { Component } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import AllAlbums from "./AllAlbums";
import axios from "axios";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    axios
      .get("api/albums")
      .then(res => res.data)
      .then(_albums => this.setState({ albums: _albums }));
  }

  render() {
    const allAlbums = this.state.albums;
    console.log("===== allAlbums: ", allAlbums);
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>

        <AllAlbums albums={this.state.albums} />

        <Footer />
      </div>
    );
  }
}

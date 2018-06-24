import React, { Component } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import AllAlbums from "./AllAlbums";
import SingleAlbum from "./SingleAlbum";
import axios from "axios";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get("api/albums")
      .then(res => res.data)
      .then(_albums => this.setState({ albums: _albums }));
  }

  handleClick(albumId) {
    console.log("---- album:", albumId);
    axios
      .get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({ selectedAlbum: album }));
  }

  render() {
    const allAlbums = this.state.albums;
    console.log("===== allAlbums: ", allAlbums);
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10">
          <AllAlbums
            albums={this.state.albums}
            toSelectAlbum={this.handleClick}
          />
          <SingleAlbum album={this.state.selectedAlbum} />
        </div>
        <Footer />
      </div>
    );
  }
}

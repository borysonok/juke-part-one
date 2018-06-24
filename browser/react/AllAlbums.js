import React, { Component } from "react";

export default class AllAlbums extends Component {
  render() {
    const albums = this.props.albums;
    const selectAlbum = this.props.toSelectAlbum;
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
          {albums.map(album => {
            return (
              <div key={album.id} className="col-xs-4">
                <a
                  className="thumbnail"
                  href="#"
                  onClick={ev => selectAlbum(album.id)}
                >
                  <img src={album.imageUrl} />
                  <div className="caption">
                    <h5>
                      <span>{album.name}</span>
                    </h5>
                    <small>{album.songs.length}</small>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
